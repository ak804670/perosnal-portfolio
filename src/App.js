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

function App() {
  return (
    <div >
      {/* <h1>from App</h1> */}
      {/* <Test/> */}
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <WorkExprience/>
      {/* <Services/> */}
      <Portfolio/>
      <Certificate/>
      <Contact/>
      <Footer/>
      {/* <div className="position-fixed chat-switch-bottom end-0 "> th</div> */}
    </div>
  );
}

export default App;
