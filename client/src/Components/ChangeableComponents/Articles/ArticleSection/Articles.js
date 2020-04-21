import React, { Component } from 'react';
import Slider from "react-slick";
import "./articles.css";
import {Link} from 'react-router-dom';


class Articles extends Component{  
  //articlesData
  render(){
    var settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: true,
    };
        return(
            <div id="section5" className="div-fourth">
                <div className="tittle">
                  <h1>قسم المقالات </h1>
                  <hr></hr> <hr></hr>
              </div>
                 <Slider {...settings}>
              <div className="article-shape">
                 {this.props.articlesData.map(article =>

                 <div className="first-item">
                     <h1>{article.title}</h1>
                 
        
                 
                  </div>

                  )} 
                  </div> 
                  </Slider>
                  <Link to="/home/article-section"> <button>استكشاف المزيد</button></Link>

            </div>
       

            )
    }
  }

export default Articles;