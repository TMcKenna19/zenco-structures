import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Residential from './Components/Residential';
import Commercial from './Components/Commercial';
import Reviews from './Components/Reviews';
import About from './Components/About';
import Quote from './Components/Quote';
import AllLeads from './Components/AllLeads';
import NewLeads from './Components/NewLeads';
import CalledLeads from './Components/CalledLeads';
import OneLead from './Components/OneLead';
import UpdateLead from './Components/UpdateLead';
import ThankYou from './Components/ThankYou';
import ColorConsult from './Components/ColorConsult';
import IntPaint from './Components/IntPaint';
import ExtPaint from './Components/ExtPaint';
import DeckFence from './Components/DeckFence';
import Cabinets from './Components/Cabinets';
import GarageFloors from './Components/GarageFloors';
import DryWall from './Components/DryWall';
import LeadTest from './Components/LeadTest';





function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/residential" element={<Residential/>} />
        <Route path="/commercial" element={<Commercial/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/quote" element={<Quote/>} />
        <Route path="/colorconsult" element={<ColorConsult />} />
        <Route path="/interiorpaint" element={<IntPaint />} />
        <Route path="/exteriorpaint" element={<ExtPaint />} />
        <Route path="/deckfence" element={<DeckFence />} />
        <Route path="/cabinets" element={<Cabinets />} />
        <Route path="/garagefloors" element={<GarageFloors />} />
        <Route path="/drywall" element={<DryWall />} />
        <Route path="/leadtest" element={<LeadTest />} />
        <Route path="/leads" element={<AllLeads />} />
        <Route path="/newleads" element={<NewLeads />} />
        <Route path="/calledleads" element={<CalledLeads />} />
        <Route path="/lead/:_id" element={<OneLead/>} />
        <Route path="/update/:_id" element={<UpdateLead/>} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;
