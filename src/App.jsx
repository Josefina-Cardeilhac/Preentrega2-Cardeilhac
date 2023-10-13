import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "../src/components/pages/Home"
import Productos from "../src/components/pages/Productos"
import Contactanos from "../src/components/pages/Contactanos"

const App = () => {

// eslint-disable-next-line no-unused-vars


  return (
    <Router>
      <div className="App">
        <div>
          <Navbar />
        </div>

        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Productos" element={<Productos/>} />
          <Route path="/Contactanos" element={<Contactanos/>} />
        </Routes>
      </div>
    </Router>
  );
  };

export default App
