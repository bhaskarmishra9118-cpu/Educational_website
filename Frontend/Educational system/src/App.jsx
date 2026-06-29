import React from "react"
import Registeration from "./Pages/Registeration"
import {Routes, Route} from "react-router-dom"
import Login from "./Pages/Login"

function App() {
 return(
  <div>
    
    
    <Routes>
      <Route path = "register" element = {<Registeration/>}/>,
      <Route path = "login" element = {<Login/>} />
      

    </Routes>
  
  </div>
 )
}

export default App
