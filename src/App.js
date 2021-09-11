import './App.css';
import ParticleBackground from './assets/Particle/ParticleBackground';
import { FrontPage } from './components/FrontPage';


function App() {
  return (
    <div className="container" >
      <div className="particles">
      <ParticleBackground/>
      </div>
      <div className="frontpage">
      <FrontPage/>
      </div>
    </div>
  );
}

export default App;
