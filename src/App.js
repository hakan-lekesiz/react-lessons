import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Sayac from "./pages/Sayac";
import NoPage from "./pages/NoPage";
import PersonList from "./pages/PersonList";
import CarList from "./pages/CarList";
import { useState } from "react";


const App = () => {

  const [selectedCar,setSelectedCar] = useState(null);
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout selectedCar={selectedCar} setSelectedCar={setSelectedCar}/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sayac" element={<Sayac />} />
          <Route path="personList" element={<PersonList />} />
          <Route path="carList" element={<CarList setSelectedCar={setSelectedCar} selectedCar={selectedCar}/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
