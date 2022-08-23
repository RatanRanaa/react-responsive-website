import './App.css';
import About from './components/About';
import Clients from './components/Clients';
import Header from './components/Header';
import Menu from './components/Menu';
import Prices from './components/Prices';
import Shop from './components/Shop';

function App() {
  return (
    <>
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
