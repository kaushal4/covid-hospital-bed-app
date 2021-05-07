
import React,{useEffect} from "react";
import axios from "axios";
import Navbar from "./compoenents/navbar"
function App() {
  useEffect(()=>{
    axios.get("http://localhost:5000/flask/hello")
    .then(data=>{console.log(data)});
    ;
  })
  return (
    <div className="App">
      <Navbar />
      <h1>Hello There</h1>
    </div>
  );
}

export default App;
