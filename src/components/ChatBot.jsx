import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import '../styles/chatbot.css';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const socketRef = useRef(null);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        const savedMessages = sessionStorage.getItem("chatMessages");
        if (savedMessages) {
            setMessages(JSON.parse(savedMessages));
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem("chatMessages", JSON.stringify(messages));
    }, [messages]);

    useEffect(() => {
        console.log('Initializing Socket.IO connection');
        socketRef.current = io(process.env.REACT_APP_SERVER_URL, {
            withCredentials: true,
            transports: ['websocket', 'polling'],
        });

        socketRef.current.on('connect', () => {
            console.log('Connected to Socket.IO server');
        });

        socketRef.current.on('connect_error', (error) => {
            console.error('Socket.IO connection error:', error.message);
        });

        socketRef.current.on('connect_timeout', () => {
            console.error('Socket.IO connection timeout');
        });

        socketRef.current.on('error', (error) => {
            console.error('Socket.IO error:', error);
        });

        socketRef.current.on('message', (data) => {
            console.log('Received message:', data);
            setMessages((prev) => [...prev, data]);
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
            socketRef.current.disconnect();
        };
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (input.trim()) {
            console.log('Sending message:', input);
            const userMessage = { sender: 'user', text: input };
            setMessages((prev) => [...prev, userMessage]);
            socketRef.current.emit('message', { text: input });
            setInput('');
            socketRef.current.emit('stopTyping');
        }
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`chatbot__container ${isOpen ? 'open' : ''}`}>
            <button className={`chatbot__open btn btn-primary ${isOpen ? 'bot__open' : ''}`} onClick={toggleChat}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-robot" viewBox="0 0 16 16">
                    <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
                    <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
                </svg>
            </button>
            <div className="chatbot__window">
                <div className="chatbot__header">
                    <h3>Chatbot</h3>
                    <button className={`chatbot__close ${isOpen ? '' : 'bot__open'}`} onClick={toggleChat}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                        </svg>
                    </button>
                </div>
                <div className="chatbot__messages">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`chatbot__message ${msg.sender === 'bot' ? 'bot' : 'user'}`}
                        >
                            <span className="chatbot__sender"></span> {msg.text}
                        </div>
                    ))}
                    {isTyping && <div className="chatbot__typing">Bot is typing<span>.</span>
                        <span>.</span>
                        <span>.</span></div>}
                    <div ref={messagesEndRef} />
                </div>
                <form className="chatbot__input" onSubmit={handleSendMessage}>
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Type a message..."
                    />
                    <button type="submit" className="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatBot;