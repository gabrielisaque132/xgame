import logo from './Logo.png';
import './App.css';
import Expositor from './screens/Exposition'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Expositor></Expositor>
      </header>
    </div>
  );
}

export default App;