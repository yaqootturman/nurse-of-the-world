import React, { Component } from 'react';
import "./articles.css";
import {Link} from 'react-router-dom';


class Articles extends Component{  
  render(){
 
        return(
            <div id="section5" className="div-fourth">
                <div className="tittle">
              </div>
              <div className="article-shape">
                 {this.props.articlesData.map((article, index) =>
                    index < 3 ?
                 <div className="first-item" key={article.article_id}>
                     <h1>{article.title}</h1>
                 
        
                 
                  </div>
                  : 
                  null

                  )} 
                  </div> 
                  <Link to="/home/article-section"> <button>   المزيد من المقالات</button></Link>

            </div>
       

            )
    }
  }

export default Articles;