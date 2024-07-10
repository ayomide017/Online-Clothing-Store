import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import data from "./data.json";
const {reviews, products} = data;

import './App.css';


import { Home } from './pages/Home/Home';
import {Cart} from "./pages/Cart";
import { Footer } from './components/Footer';
import { Header } from './components/Header';



function App() {

  return (
   <Router>
    <Header/>
    <main>
      <Routes>
        <Route path='/' element={<Home reviews={reviews}  products={products}/>}/>
        <Route path='/cart' element={<Cart/>}>  </Route>
      </Routes>

    </main>
    <Footer/>
   </Router>
  )
}

export default App
