// import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Welcome from './Welcome';

//<Greet/> can also be written as <Greet><Greet/> but since there is no content in between tags so it is self closing tag i.e. <Greet/>

let name="Narmeen"
function App() {
  return (
    <>
    <Greet/>
    <Welcome/>
    <nav>
      <ul> 
      <li> <a href="https://www.google.com"> Terms of use </a>  </li>
      <li> Home</li>
      <li> About</li>
      <li> Contact</li>
      </ul>
    </nav>
    <div>
      <h1>This is my very first app</h1>
      <p>I am excited to learn it from "code with Harry", my name is {name}</p>
    </div>

    </>
  )     
  
}

export default App;
