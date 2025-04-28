import React,{Component} from "react"
class Comptteur extends Component
{  
  constructor() 
  {
    super()
        this.state={compt:0}

  }
  incrementer=()=>{this.setState({compt:this.state.compt+1})}
  decrementer=()=>{this.setState({compt:this.state.compt-1})}
  rest=()=>{this.setState({compt:this.state.compt=0})
  }

    render()
{

    return(<div> 
    <h3>le compteur est :{this.state.compt} </h3>
    <button onClick={this.incrementer}>increment</button>
    <button onClick={this.decrementer}>decrement</button>
    <button onClick={this.rest}>rest</button>

</div>) 
    }
   

};
export default Comptteur