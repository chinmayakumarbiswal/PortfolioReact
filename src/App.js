import './App.css';
import Hero from './components/Hero/Hero';
import Sidebar from './components/Sidebar/Sidebar';
import Mobheader from './components/Mobheader/Mobheader';
import About from './components/About/About';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Mobheader/>
      <Hero/>
      <Sidebar/>
      <About/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
