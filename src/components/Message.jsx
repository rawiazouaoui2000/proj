/*import { Component } from "react";

class Message extends Component
{ 
    constructor(){
    super()
    this.state={color:'red',
                fontSize:'16'
                 
    }
    }
    change1=()=>{this.setState({color:'blue',fontSize:'20px'})}
    change2=()=>{this.setState({color:'red',fontSize:'16px'})}
render()
{
    const{color,fontSize}=this.state;
    return(<p style={{color:color,fontSize:fontSize}}
onMouseEnter={this.change1}
onMouseLeave={this.change2}></p>)}}
export default Message

