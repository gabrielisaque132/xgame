import logo from './Logo.png';
import './App.css';
import Expositor from './screens/Exposition'


function App() {
  
  return (
    
    <div className="App">
      <header className="App-header">
      
      <div class="topnav" id="myTopnav">
            <a href="#home" class="active">Inicio</a>
            <a href="#news">Produtos</a>
            <a href="#contact">Contato</a>
            <a href="#about">Sobre</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
      <i class="fa fa-bars"></i>
      
    </a>
    </div>
        <Expositor></Expositor>
      </header>
    </div>
    
  );
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

}


export default App;