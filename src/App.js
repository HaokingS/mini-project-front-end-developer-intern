import React from 'react';
import HelloWorld from './Components/HelloWorld';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return(
    <div>
      <Router>
      
      <Header />
      <HelloWorld name = "Haoking"/>

        <Routes>

          <Route 
            path="/" 
            element={
              <h1 className='font-bold text-2x1'>
                This is the home page
              </h1>
            }
          >
          </Route>

          <Route 
            path="/about" 
            element={
              <h1 className='font-bold text-2x1'>
                About us
              </h1>
            }
          >
          </Route>

        </Routes>

      <Footer />
      </Router>
      


    </div>
  );
}

export default App;
