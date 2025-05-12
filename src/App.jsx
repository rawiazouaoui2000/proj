/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App  */
//import Entete from "./components/Entete"
//import Titre from "./components/Titre"
//import Titre1 from "./components/Titre1"
//import Paragraphe from "./components/Paragraphe"
//import Entete from "./components/Entete"
/*import Piedepage from "./components/Piedepage"*/
//import Compteur from "./components/Compteur"
//C
//{function App()
//  return (
    //<div>
      //<header>
        //<Entete/>
     // </header>
      //<main>
        //<Paragraphe/>
      //</main>
     // <footer>
        //<Piedepage/>
      //</footer>
  //    <div>
    //<Titre/>
    //<itre1/>
    //</div>

 // )
//}
//export default App
//import React from "react";
//import Compteur from "./components/Compteur";
//import Texte from "./components/Texte"
/*import Message from "./components/Message"
function App()
{
  return (<div><Message/></div>)
};
export default App*/

/*import Comptteur from "./components/Comptteur"
import Phrase from "./components/Phrase"
function App()
{
  return (
  <div><Phrase/><Comptteur/></div>
)

}
*/
/*import './App.css'
import Compteur1 from "./components/Compteur1";
function App()
{
  return (<div><Compteur1/></div>)
};
export default App*/

import './App.css'


/*import Paragraphe1 from "./components/Paragraphe1"
function App()
{
  return (<div><Paragraphe1/></div>)
};
export default App*/
/*import Utilisateur from './components/Utilisateur'
function App()
{
  return (<div><Utilisateur/></div>)
};
export default App*/
/*import Paragraphe2 from './components/Paragraphe2' 
function App()
{
  return (<div><Paragraphe2/></div>)
};
export default App */

/*import Message from './components/Props'
function App()
{
  return (
  <div>
    <Message contenu="liste des produit"/>
    <Message contenu="rawia"/></div>
  )
}
export default App*/


import Produit from './components/Produit'
function App()
{
  const Style={
    color:'red',
    fontSize:'40'
  }
  return (
  <div>
    <Produit information={{nom:" sucre ", prix : 15.45}}nomstyle={Style}/>
   </div>
  )
}
export default App
/*import Animals from './components/tableux'
function App ()
{ const animaux=["chien","chat","lapin"]

  return (
    <div>
      <Animals items={animaux}/>
    </div>
  )
}
export default App*/ 
/*import Bouton from './components/Fonction'
function App (){ 
return (
<div><Bouton click={()=>alert("bien")}/> 

 </div>
 )
}
export default App*/