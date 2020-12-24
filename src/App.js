import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import { Document } from 'react-pdf'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Document file="../assets/Resume_GREGOIRE_LAGET.pdf"/>
      <Footer/>
    </div>
);
}

export default App;
