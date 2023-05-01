
import React,{useEffect, useState} from 'react'


const App = () => {
  const [tempraturevalue,settemperaturevalue]=useState(10);
  const [colortemperature,setcolortemperature]=useState("");
  useEffect(()=>{
    if(tempraturevalue<=15 ){
      setcolortemperature("cold");
    }
    else if(tempraturevalue>25){
      setcolortemperature("hot");
    }
    else{
      setcolortemperature("neutral")

    }

  },[tempraturevalue])
 
 
  return (
    

    <div className='app-container'>
      
      <div className='temperature-display-container'>
        <div className={`temperature-display ${colortemperature}`}>{tempraturevalue}°C </div>
      </div>
      <div className='button-container'>
        <button onClick={() =>settemperaturevalue(tempraturevalue+1)}>+</button>
        <button onClick={() =>settemperaturevalue(tempraturevalue-1)}>-</button>
      </div>
      </div>
  )
}

export default App