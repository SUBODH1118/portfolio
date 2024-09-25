import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Projects from './Components/Projects'
import Contact from "./Components/Contact";
import Form from "./Components/Form";
import Hobies from "./Components/Hobies";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Card/>
      <Projects/>
      <Contact/>
      <Hobies/>
      <Form/>
      
    </>
  );
}

export default App;
