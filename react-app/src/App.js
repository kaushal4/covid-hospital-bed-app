
import React,{useEffect} from "react";
import axios from "axios";
import Navbar from "./compoenents/navbar"
import Homepage from "./compoenents/homePage"
import windowResize from "./compoenents/windowResize"
import CovidForm from "./compoenents/covid_form.js";
function App() {
  useEffect(()=>{
    axios.get("http://localhost:5000/flask/hello")
    .then(data=>{console.log(data)});
    ;
  })
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <CovidForm />
    </div>
  );
}

export default App;
