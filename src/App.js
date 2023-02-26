// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Routing from './routes/Routing';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routing />
      <Footer />
    </BrowserRouter>);
}

export default App;
