import { useState } from "react";

function Paragraphe2(){
    const [paragraphe,setParagraphe]=useState(
        {
            couleur:"black",
            taille:'16px ',
            police:'Arial'
        }
    )
    const changer1=()=>{
        
        setParagraphe(prev =>({...prev,  couleur:"red",
            taille:"20px"
        }
        ))};
    
    const quitter=()=>{
        setParagraphe(prev =>({...prev, 
            couleur:"black",
            taille:"16px"
        }
        ));
       
    }
    return(
        <div>
           <p style={{color:paragraphe.couleur,fontFamily:paragraphe.police,fontSize:paragraphe.taille}}onMouseEnter={changer1}
           onMouseLeave={quitter}>je change ma couleuret mon taille
           </p>
       </div>
    )

}
export default Paragraphe2;