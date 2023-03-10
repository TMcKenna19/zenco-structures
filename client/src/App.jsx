import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import ResPainting from './Components/ResPainting';
import AllLeads from './Components/AllLeads';
import Home from './Components/Home';
import ComPainting from './Components/ComPainting';
import About from './Components/About';
import Quote from './Components/Quote';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/residentialPainting" element={<ResPainting />} />
        <Route path="/commercialPainting" element={<ComPainting/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/quote" element={<Quote/>} />
      </Routes>
   
      
    </div>
  );
}

export default App;
