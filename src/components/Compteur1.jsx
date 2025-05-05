import { useState } from "react"
function Compteur1(){
const [compteur,setCompteur]=useState(0);
const incrementer=()=>{
  setCompteur(comt=>comt+1);
}
    
    //setCompteur(compteur+1);

return(
    <div>
        <p>Compteur:{compteur}</p>
        <button onClick={incrementer}>inc</button>
    </div>
)
}
export default Compteur1;