import './App.css';
import About from './components/About';
import Clients from './components/Clients';
import Header from './components/Header';
import Menu from './components/Menu';
import Prices from './components/Prices';
import Shop from './components/Shop';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Shop/>
    <Menu/>
    <Clients/>
    <Prices/>
    </>
  );
}

export default App;
