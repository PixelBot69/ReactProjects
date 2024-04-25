import { useState } from "react"



function Bmi(){

    const[height,setHeight]=useState(null)
    const[weight,setWeight]=useState(null)
    const [bmi,setBmi]=useState(null)
    function Cal(){
        const numericHeight = parseFloat(height);
        const numericWeight = parseFloat(weight);
        const calculateHeightInMeters = numericHeight / 100;
        const calculateBmiValue = (
          numericWeight /
          (calculateHeightInMeters * calculateHeightInMeters)
        ).toFixed(2);
    
        setBmi(calculateBmiValue);
    }




    return(
        <div>
         <label>Height (cm):</label>
        <input
          onChange={(event) => setHeight(event.target.value)}
          type="number"
          value={height}
        />
         <label>Weight (cm):</label>
        <input
          onChange={(event) => setWeight(event.target.value)}
          type="number"
          value={weight}
        />
        <button onClick={Cal}>
        {bmi <18.5 ? "under" : bmi >18.5 && bmi < 44.5 ?"normal" : bmi >44.5 && bmi <77.5 ? "overweight" :"obese"}


        </button>
       

      </div>


      
    )
}


export default Bmi