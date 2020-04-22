import React, { Component } from 'react';
import "./articles.css";
import {Link} from 'react-router-dom';


class Articles extends Component{  
  render(){
 
        return(
            <div id="section5" className="div-fourth">
                <div className="tittle">
                  <h1>قسم المقالات </h1>
                  <hr></hr> <hr></hr>
              </div>
              <div className="article-shape">
                 {this.props.articlesData.map(article =>

                 <div className="first-item" key={article.article_id}>
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