// import logo from './logo.svg';
import './App.css';
import { Menu } from './Navbar/Menu';
import { State } from './State/State';
import { About } from './About/About';
import { Home } from './Home/Home';


function App() {
  // let name = "Ashvani Kumar";  
  // let b = 10;
  return (
    <>
    <Menu title="React App" aboutText = 'About Us'/>
    <Home/>
    <State/>
    <About/>
    </>
  );
}

export default App;
