
import React from "react";
import Navbar from "./compoenents/navbar"
import Homepage from "./compoenents/homePage"
import Bed from "./compoenents/Beds"
import CovidForm from "./compoenents/covid_form.js";
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Bed />
      <CovidForm />
    </div>
  );
}

export default App;
