import "./main.css"
import Header from "./Components/Header";
import Bar from "./Components/Bar";
import { useState } from "react";


function App() {
  // features = {
  //   display:"none" , right:0,
  // }
  const [showside,setShowside] = useState("none");

  return (
   
    <div className="container" style={showside==="block" ? {gridTemplateColumns: "220px auto"} : {gridTemplateColumns: "15px auto"}}>
      <Header showside={showside} setShowside={setShowside}></Header>
      <Bar showside={showside} setShowside={setShowside}></Bar>
      <div className="item3">
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
        <h1>semih</h1>
      </div>
    </div>
    
    
  );
}

export default App;
