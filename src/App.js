import './App.css';
// import Test from './components/test';
import  Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Experience from './components/Experience'
// import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Certificate from './components/Certificate'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WorkExprience from './components/WorkExprience';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div >
      {/* <h1>from App</h1> */}
      {/* <Test/> */}
      <Header/>
      <Nav/>
      <About className="block"/>
      <Experience className="block"/>
      <WorkExprience className="block"/>
      {/* <Services/> */}
      <Portfolio className="block"/>
      <Certificate className="block"/>
      <Contact className="block"/>
      <ChatBot className="block"/>
      <Footer className="block"/>

      {/* <div className="position-fixed chat-switch-bottom end-0 "> th</div> */}
    </div>
  );
}

export default App;
