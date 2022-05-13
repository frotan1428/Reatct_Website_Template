import logo from './logo.svg';
import './App.css';
import About from './Personal/About';
import Skill from './Personal/Skill';
import Experince from './Personal/Experince';
import Education from './Personal/Education';
import Service from './Personal/Service';
import Portfoli from './Personal/Portfoli';
import Testimonail from './Personal/Testimonail';
import Blog from './Personal/Blog';
import Contact from './Personal/Contact';
import Hero from './Personal/Hero';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Skill/>
      <Experince/>
      <Education/>
      <Service/>
      <Portfoli/>
      <Testimonail/>
      <Blog/>
      <Contact/>
    </div>
  );
}

export default App;
