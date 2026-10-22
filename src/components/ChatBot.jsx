import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import '../styles/chatbot.css';
import { BsRobot, BsSendFill, BsTrash3 } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { FiArrowRight } from 'react-icons/fi';

const QUICK_SUGGESTIONS = [
  { id: 'skills', label: '💡 Core Skills', text: 'What is your core tech stack and skills?' },
  { id: 'experience', label: '💼 Work at Slashash', text: 'Tell me about your work at Slashash Tech and key achievements.' },
  { id: 'resubuddy', label: '🚀 ResuBuddy', text: 'Tell me about ResuBuddy (resubuddy.in).' },
  { id: 'rag', label: '🤖 AI RAG Backend', text: 'Tell me about your AI Retrieval-Augmented Generation (RAG) backend service.' },
  { id: 'contact', label: '📬 Contact Info', text: 'How can I get in touch with you?' },
];

const ChatBot = () => {
  const [captureUser, setCaptureUser] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [hasWelcomeMessage, setHasWelcomeMessage] = useState(false);

  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Load user info and messages from sessionStorage on mount
  useEffect(() => {
    const savedUser = sessionStorage.getItem('chatUserInfo');
    if (savedUser) {
      try {
        setUserInfo(JSON.parse(savedUser));
        setCaptureUser(true);
      } catch (e) {
        console.error('Failed to parse chatUserInfo:', e);
      }
    }

    const savedMessages = sessionStorage.getItem('chatMessages');
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages);
        if (Array.isArray(parsedMessages) && parsedMessages.length > 0) {
          setMessages(parsedMessages);
          const hasWelcome = parsedMessages.some(
            (msg) => msg.sender === 'bot' && msg.text && msg.text.includes('Welcome')
          );
          setHasWelcomeMessage(hasWelcome);
        }
      } catch (e) {
        console.error('Failed to parse chatMessages:', e);
      }
    }
  }, []);

  // Save messages to sessionStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem('chatMessages', JSON.stringify(messages));
    }
  }, [messages]);

  // Initialize Socket.IO connection to actual backend bot after user info is captured
  useEffect(() => {
    if (!captureUser) return;

    console.log('Initializing Socket.IO connection to actual bot server...');
    socketRef.current = io(process.env.REACT_APP_SERVER_URL, {
      withCredentials: true,
      transports: ['websocket', 'polling'],
      query: {
        name: userInfo.name,
        email: userInfo.email,
        phone: userInfo.phone,
      },
    });

    socketRef.current.on('connect', () => {
      console.log('Connected to actual Socket.IO bot server');
      setIsConnected(true);
    });

    socketRef.current.on('disconnect', () => {
      console.log('Disconnected from Socket.IO server');
      setIsConnected(false);
    });

    socketRef.current.on('connect_error', (error) => {
      console.error('Socket.IO connection error:', error.message);
      setIsConnected(false);
    });

    socketRef.current.on('connect_timeout', () => {
      console.error('Socket.IO connection timeout');
    });

    socketRef.current.on('error', (error) => {
      console.error('Socket.IO error:', error);
    });

    // Real messages received from the actual bot
    socketRef.current.on('message', (data) => {
      console.log('Received message from actual bot:', data);

      const botMessage = typeof data === 'string'
        ? { sender: 'bot', text: data }
        : { sender: data.sender || 'bot', text: data.text || '' };

      // Prevent duplicate welcome messages
      if (
        botMessage.sender === 'bot' &&
        botMessage.text &&
        botMessage.text.includes('Welcome') &&
        hasWelcomeMessage
      ) {
        console.log('Skipping duplicate welcome message');
        return;
      }

      setMessages((prev) => [...prev, botMessage]);

      if (botMessage.sender === 'bot' && botMessage.text && botMessage.text.includes('Welcome')) {
        setHasWelcomeMessage(true);
      }

      setIsTyping(false);
    });

    socketRef.current.on('typing', () => {
      setIsTyping(true);
    });

    socketRef.current.on('stopTyping', () => {
      setIsTyping(false);
    });

    return () => {
      console.log('Disconnecting Socket.IO');
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [captureUser, userInfo, hasWelcomeMessage]);

  // Scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, isOpen]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (socketRef.current) {
      if (e.target.value.trim()) {
        socketRef.current.emit('typing');
      } else {
        socketRef.current.emit('stopTyping');
      }
    }
  };

  // Send message to the actual bot
  const handleSendMessage = (textToSend) => {
    const messageText = typeof textToSend === 'string' ? textToSend : input;
    if (!messageText || !messageText.trim()) return;

    console.log('Sending message to actual bot:', messageText);
    const userMessage = { sender: 'user', text: messageText };
    setMessages((prev) => [...prev, userMessage]);

    if (socketRef.current) {
      socketRef.current.emit('message', { text: messageText });
      socketRef.current.emit('stopTyping');
    }

    setInput('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSendMessage();
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    if (!userInfo.name.trim() || !userInfo.email.trim()) {
      alert('Please enter your name and email to continue.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userInfo.email)) {
      alert('Invalid email format. Please enter a valid email.');
      return;
    }
    sessionStorage.setItem('chatUserInfo', JSON.stringify(userInfo));
    setCaptureUser(true);
  };

  const clearChat = () => {
    setMessages([]);
    setHasWelcomeMessage(false);
    sessionStorage.removeItem('chatMessages');
  };

  return (
    <div className={`chatbot__container ${isOpen ? 'open' : ''}`}>
      {/* Floating Launcher Button */}
      <button
        className={`chatbot__launcher ${isOpen ? 'hidden' : ''}`}
        onClick={toggleChat}
        aria-label="Open Bot Assistant"
        title="Chat with Bot"
      >
        <div className="chatbot__launcher-icon">
          <BsRobot />
        </div>
        <span className="chatbot__launcher-ping"></span>
        <span className="chatbot__launcher-label">Ask Bot</span>
      </button>

      {/* Chat Window */}
      <div className="chatbot__window">
        {/* Header */}
        <div className="chatbot__header">
          <div className="chatbot__header-info">
            <div className="chatbot__avatar">
              <BsRobot />
              <span className={`chatbot__status-dot ${isConnected ? 'online' : 'connecting'}`}></span>
            </div>
            <div>
              <h4>Anish's Bot</h4>
              <span className="chatbot__status-text">
                {isConnected ? '🟢 Connected' : 'Connecting to bot...'}
              </span>
            </div>
          </div>

          <div className="chatbot__header-actions">
            {captureUser && (
              <button 
                className="chatbot__action-btn" 
                onClick={clearChat} 
                title="Clear Conversation"
                aria-label="Clear Conversation"
              >
                <BsTrash3 />
              </button>
            )}
            <button 
              className="chatbot__action-btn" 
              onClick={toggleChat} 
              title="Close Chat"
              aria-label="Close Chat"
            >
              <IoClose />
            </button>
          </div>
        </div>

        {/* User Capture Form: required so actual bot server logs user info */}
        {!captureUser ? (
          <form className="chatbot__capture-form" onSubmit={handleUserSubmit}>
            <div className="chatbot__capture-header">
              <div className="chatbot__capture-avatar">
                <BsRobot />
              </div>
              <h3>Start Chat with Bot</h3>
              <p>Please enter your details to connect with the live assistant</p>
            </div>

            <div className="chatbot__capture-fields">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={userInfo.name}
                onChange={handleUserChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={userInfo.email}
                onChange={handleUserChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone (optional)"
                value={userInfo.phone}
                onChange={handleUserChange}
              />
            </div>

            <button type="submit" className="btn btn-primary chatbot__capture-submit">
              Connect to Bot <FiArrowRight />
            </button>
          </form>
        ) : (
          <>
            {/* Quick Suggestion Chips: click to send question directly to actual bot */}
            <div className="chatbot__quick-chips">
              {QUICK_SUGGESTIONS.map((chip) => (
                <button
                  key={chip.id}
                  className="chatbot__chip"
                  onClick={() => handleSendMessage(chip.text)}
                  title={chip.text}
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Live Message History from Actual Bot */}
            <div className="chatbot__messages">
              {messages.length === 0 && (
                <div className="chatbot__empty-hint">
                  <p>Say hello or pick a quick question above to start chatting with the bot!</p>
                </div>
              )}

              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chatbot__message-wrapper ${msg.sender === 'bot' ? 'bot' : 'user'}`}
                >
                  <div
                    className={`chatbot__message ${msg.sender === 'bot' ? 'bot' : 'user'}`}
                  >
                    <div className="chatbot__bubble-content">
                      {msg.text && typeof msg.text === 'string'
                        ? msg.text.split('\n').map((line, lIdx) => (
                            <p key={lIdx} className="chatbot__paragraph">{line}</p>
                          ))
                        : msg.text}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="chatbot__typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form connected directly to actual bot */}
            <form className="chatbot__input-form" onSubmit={handleFormSubmit}>
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Type a message to the bot..."
                maxLength={200}
              />
              <button 
                type="submit" 
                className="chatbot__send-btn" 
                disabled={!input.trim()}
                aria-label="Send message to bot"
              >
                <BsSendFill />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatBot;
