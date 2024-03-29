import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';

function App() {
  return(
    <div className='relative pb-10 min-h-screen'>
      <Router>
      <Header />
      
        <div className='p-3'>
        <Routes>
          <Route 
            path="/" 
            element={<Home />}
          >
          </Route>
          <Route 
            path="/about"
            element={<About />}
          >
          </Route>
          <Route 
            path="/products/:id"
            element={<Product />}
          >
          </Route>
        </Routes>
        </div>

      <Footer className="relative" />
      </Router>
      
    </div>
  );
}

export default App;
