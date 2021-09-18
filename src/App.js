import logo from './logo.svg';
import './App.css';
import {Menu} from "./Navbar/Menu";

function App() {
  let name = "Ashvani Kumar";  
  // let b = 10;
  return (
    <>
    <Menu/>
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="Logo" />
        <h1>Hello {name}!</h1>
        <p>
          Welcome to my react App!
        </p>
      </header>
    </div>
    </>
  );
}

export default App;
