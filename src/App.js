import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Career from "./Pages/Career";
import Contact from "./Pages/Contact";
import Layout from "./Pages/Layout";
import Risk from "./Pages/Topic/Risk";
import Employment from "./Pages/Topic/Employment";
import Private from "./Pages/Topic/Private";
function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />{" "}
          <Route path="/Risk" element={<Risk />} />
          <Route path="/Employment" element={<Employment />} />
          <Route path="/Private" element={<Private />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
