import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/animate.min.css'
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/datepicker.css'
import '../src/assets/css/font-awesome.min.css'
import '../src/assets/css/icofont.css'
import '../src/assets/css/magnific-popup.css'
import '../src/assets/css/nice-select.css'
import '../src/assets/css/normalize.css'
import '../src/assets/css/owl-carousel.css'
import '../src/assets/css/responsive.css'
import '../src/assets/css/slicknav.min.css'
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Header from './component/Header';
import Insurance from './component/Insurance';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/insurance' element={<Insurance/>} />
    </Routes>
  );
}

export default App;
