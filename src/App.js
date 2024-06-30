import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PagePrincipale from "./Pages/PagePrincipale";
import About from "./Pages/About";
import ByNumber from "./Pages/ByNumber";
import PagePrincipaleAdmin from "./Pages/PagePrincipaleAdmin.";
import AddNewUser from "./Pages/AddNewUser"


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/pageprincipale" element={<PagePrincipale />} />
            <Route path="/page-principale-admin" element={<PagePrincipaleAdmin />} />
            <Route path="/bynumber" element={<ByNumber />} />
            <Route path="/AddNewUser" element={<AddNewUser />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h1><b>ERROR 404</b></h1>} />
        </Routes>  
    </BrowserRouter>
  );
};

export default App; 
