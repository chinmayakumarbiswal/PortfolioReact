import './App.css';
import Hero from './components/Hero/Hero';
import Sidebar from './components/Sidebar/Sidebar';
import Mobheader from './components/Mobheader/Mobheader';
import About from './components/About/About';
import Education from './components/Education/Education';


function App() {
  return (
    <div className="App">
      <Mobheader/>
      <Hero/>
      <Sidebar/>
      <About/>
      <Education/>
    </div>
  );
}

export default App;
