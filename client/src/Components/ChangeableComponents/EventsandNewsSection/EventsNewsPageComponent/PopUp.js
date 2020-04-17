import React ,{Component}from "react";
import './popup.css';

class Popup extends Component {  

    constructor(props) {
        super(props);
        this.state ={
            number: this.props.unique,
            
        }
        }
           
    
  render() {  

        return (  
        <div className='popup'>  
            <div className='inner'> 
                  <div className="content">
                  <h1>jjdd</h1>
                  <p key={this.props.unique}>{this.props.text}</p>
                     
                 </div>
                 <button onClick={this.props.closePopup}>
                     close
                 </button>  
            </div>  
        </div>  
        );  
    }  
     }  

export default Popup;

// { this.props.text.map(acvtivityContent=>
//<h1>{ acvtivityContent.content}</h1>
//)}