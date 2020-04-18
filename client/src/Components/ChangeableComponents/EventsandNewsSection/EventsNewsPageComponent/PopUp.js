import React from "react";
import './popup.css';

function Popup(props){  
    return (  
        <div className='popup'>  
            <div className='inner'> 
                  <div className="content">
                  <h1>jjdd</h1>
                  <p key={props.unique}>{props.text}</p>
                     
                 </div>
                 <button onClick={props.closePopup}>
                     close
                 </button>  
            </div>  
        </div>  
        );  
    }  
     

export default Popup;

// { this.props.text.map(acvtivityContent=>
//<h1>{ acvtivityContent.content}</h1>
//)}