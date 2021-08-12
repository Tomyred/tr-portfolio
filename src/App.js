import './App.css';
import ParticleBackground from './assets/Particle/ParticleBackground';
import Frontpage from './components/FrontPage';

function App() {
  return (
    <div className="container" >
      <div className="particles">
      <ParticleBackground/>
      </div>
      <div className="frontpage">
      <Frontpage/>
      </div>
    </div>
  );
}

export default App;
