//import './Procss3.css'
function Procss3(){

    const monstyle={
        color:'blue',
        fontSize:'30px',
    }
    
    const monstyle1={
        color:'green',
        fontSize:'30px',
    }
 
    return( 
        <div>
   <style>
        {`
        .bb{
        padding:20px;
        background-color:blue;
        }
        `}
    </style>
            <p>bonjour mes amis</p>
            <h1 style={{color:'red',textShadow:"5px 5px 5px black"}}>soyez les bienvune</h1>
            <button className="bb">changer mon style</button>
            <p className="p">welcom</p>
            <h2 style={monstyle}>devellopper</h2>
            <p style={monstyle1}>hhhhhh</p>
            

        </div>
    )
}
export default Procss3