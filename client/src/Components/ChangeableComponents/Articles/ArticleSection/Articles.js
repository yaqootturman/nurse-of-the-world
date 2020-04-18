import React, { Component } from 'react';
import "./articles.css";
import {Link} from 'react-router-dom';


class Articles extends Component{  
  //articlesData
  render(){
    console.log(this.props.articlesData);

        return(
            <div id="section5" className="div-fourth">
              <i id="arrow-left" class="fas fa-arrow-left"></i>
               <i id="arrow-right" class="fas fa-arrow-right"></i>
                <div className="tittle">
                  <h1>قسم المقالات </h1>
                  <hr></hr> <hr></hr>
              </div>
              <div className="article-shape">
                 {this.props.articlesData.map(article =>

                 <div className="first-item">
                     <h1>{article.title}</h1>
                 
        
                 
                  </div>

                  )} 
                  </div> 
                  <Link to="/home/article-section"> <button>استكشاف المزيد</button></Link>

            </div>
       

            )
    }
  }

export default Articles;