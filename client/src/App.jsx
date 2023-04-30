import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import ResPainting from './Components/ResPainting';
import AllLeads from './Components/AllLeads';
import OneLead from './Components/OneLead';
import Home from './Components/Home';
import ComPainting from './Components/ComPainting';
import Reviews from './Components/Reviews';
import About from './Components/About';
import Quote from './Components/Quote';
import ThankYou from './Components/ThankYou';
import UpdateLead from './Components/UpdateLead';



function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/residentialPainting" element={<ResPainting />} />
        <Route path="/commercialPainting" element={<ComPainting/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/quote" element={<Quote/>} />
        <Route path="/leads" element={<AllLeads />} />
        <Route path="/lead/:_id" element={<OneLead/>} />
        <Route path="/update/:_id" element={<UpdateLead/>} />
        <Route path="/thankyou" element={<ThankYou />} />
        
      </Routes>
    </div>
  );
}

export default App;
