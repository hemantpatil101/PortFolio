
import './App.css';
import Home from './Home';
import About from './About';
import Services from './Services';
import Navbar from './Navbar';
import Contact from './Contact';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div>
    <Navbar/> 
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    
    </div>
  );
}

export default App;
