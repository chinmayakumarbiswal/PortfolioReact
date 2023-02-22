import './App.css';
import Hero from './components/Hero/Hero';
import Sidebar from './components/Sidebar/Sidebar';
import Mobheader from './components/Mobheader/Mobheader';
import About from './components/About/About';


function App() {
  return (
    <div className="App">
      <Mobheader/>
      <Hero/>
      <Sidebar/>
      <About/>
    </div>
  );
}

export default App;
