import React,{ useState } from 'react'
import MainContent from "./components/MainContent.js"
import Head from "./components/Head.js"
import Foot from "./components/Foot.js"
/* import Stat from "./components/Stat.js" */
import ToggleSwitch from "./components/ToggleSwitch.js"
import './App.css'


function App(){
  return(
    <div>
        <Head />
        <MainContent />
        {/* <ToggleSwitch />` */}
        <Foot /> 
    </div>
  )
}

export default App;
