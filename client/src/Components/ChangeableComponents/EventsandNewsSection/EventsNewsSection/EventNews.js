import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./eventNews.css";    
class EventNews extends Component{
    //eventsData
    render(){
        

        return(
            <div id="section3" className="div-third">
            <i id="arrow-left" class="fas fa-arrow-left"></i>
                 <i id="arrow-right" class="fas fa-arrow-right"></i>
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