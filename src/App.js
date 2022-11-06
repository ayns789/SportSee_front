import './App.css';
// import Home from './Router/index.jsx';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router/Router';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
