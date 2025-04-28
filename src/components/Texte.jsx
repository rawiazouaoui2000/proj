/*import React,{ Component } from "react";

class Texte extends Component
{
    constructor()
    { 
        super ()
        this.state={texte:''}
    }
    changer=(e)=>{
        this.setState({texte:e.target.value})
    }
    render(){
        return( 
            <div><input type="texte"
            value={this.state.value}
            onChange={this.changer}/>
            <p>vous avez saisir: {this.state.texte}</p></div>
        )

    }
}
export default Texte
