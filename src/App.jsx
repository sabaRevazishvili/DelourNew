import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main/Main";
import News from "./pages/News/News";
import { Route, Routes } from "react-router-dom";
import Training from "./pages/Training/Training";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/News" element={<News />} />
        <Route path="/Training" element={<Training />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
