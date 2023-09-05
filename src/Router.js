import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Servic from './pages/Servic';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/me" element={<Contact />} />
      <Route path="/services" element={<Servic />} />
    </Routes>
  );
}
