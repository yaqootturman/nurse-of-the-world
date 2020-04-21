import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./eventNews.css";    
class EventNews extends Component{
    //eventsData
    render(){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        return(
            <div id="section3" className="div-third">
                <div className="tittle">
                    <h1>قسم الأنشطة والأخبار</h1>
                    <hr></hr> <hr></hr>
                </div>
                <div className="activites-shape">
                    {this.props.eventsData.map( event =>
                         <div className="first">
                             <h1>{event.title}</h1>
                      
                         </div>
                        )}

                </div>
               <Link to="/home/news-and-event-section"> <button>استكشاف المزيد</button></Link>
            </div>

        )
    }
}
export default EventNews;