import React from 'react';
import { Link } from "react-router-dom";
import "./eventNews.css";    
function EventNews(){
        return(
            <div id="section3" className="div-third">
                <div className="tittle">
                    <h1>قسم الأنشطة والأخبار</h1>
                    <hr></hr> <hr></hr>
                </div>
                <div className="activites-shape">
                <div className="first">
                    1   
                    </div>
                    <div className="second">
                    2 
                    </div>
                    <div className="third">
                        3  
                    </div>
                    <h1>tittle1</h1>
                    <h1 >tittle2</h1>
                    <h1 >tittle3</h1> 
                </div>
               <Link to="/home/news-and-event-section"> <button>استكشاف المزيد</button></Link>
            </div>

        )
    }
export default EventNews;