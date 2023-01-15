import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Header/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/clients' element={<Clients/>} />
        <Route path='/prices' element={<Prices/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
