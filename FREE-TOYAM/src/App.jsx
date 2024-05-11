import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Components/Home';
import Advertise from './Components/Advertise';

import Contact from './Components/Contact'
import FAQ from './Components/FAQ';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/advertise" element={<Advertise />} />
      <Route path="/faq" element={<FAQ/>} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
