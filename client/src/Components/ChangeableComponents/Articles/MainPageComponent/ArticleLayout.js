import React from 'react';
import './articleLayout.css';
function ArticleLayout(props){
    return(
        <div className='popup2'>  
        <div className='inner'> 
              <div className="content">
                 <h1>{props.header}</h1>
                  <p> 
                
                 {props.text}

                  </p>
                 
             </div>
             <button onClick={props.closePopup}>
                     close
            </button>  
        </div>  
    </div>  
    )
}
export default ArticleLayout;