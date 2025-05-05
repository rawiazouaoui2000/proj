import { useState } from "react";

function Utilisateur(){
    const [user,SetUser]=useState(
        {
            nom:' ',
            prenom:' ',
            age:''
        }
    )
    const changer=(e)=>{
        const{name,value}=e.target
        SetUser({...user,[name]:value});
    }
    return(
        <div>
            <input type="text" name="nom" onChange={changer}/><br></br>
            <input type="text" name="prenom" onChange={changer}/><br></br>
            <input type="number" name="age" onChange={changer}/><br></br>
            <p>L'utilisateur est : <br></br>{user.nom}<br></br>{user.prenom}<br></br>{user.age}</p>

        </div>
    )

}
export default Utilisateur;;