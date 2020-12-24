import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import ScrollTopArrow from './components/ScrollTopArrow';
import { Document } from 'react-pdf'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ScrollTopArrow/>
      Hello World !
      <Footer/>
    </div>
);
}

export default App;
