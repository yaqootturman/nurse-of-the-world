import React from 'react';
import "./articles.css";
import {Link} from 'react-router-dom';


function Articles(){
  
        return(
            <div id="section5" className="div-fourth">
               <i id="arrow-right" class="fas fa-arrow-right"></i>
                <div className="tittle">
                  <h1>قسم المقالات </h1>
                  <hr></hr> <hr></hr>
              </div>
              <div className="article-shape">
                  <div className="first-item">
                    1   
                  </div>
                  <div className="second-item">
                    2 
                  </div>
                  <div className="third-item">
                      3  
                  </div>
                  <h1>tittle1</h1>
                  <h1 >tittle2</h1>
                  <h1 >tittle3</h1> 
                  <i id="arrow-left" class="fas fa-arrow-left"></i>
                  </div> 
                  <Link to="/home/article-section"> <button>استكشاف المزيد</button></Link>

            </div>
       

            )
    }

export default Articles;