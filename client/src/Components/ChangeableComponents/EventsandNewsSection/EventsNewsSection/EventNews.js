import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./eventNews.css";
class EventNews extends Component {

    render() {

        return (
            <div id="section3" className="div-third">
                <div className="activites-shape">
                    {this.props.eventsData.map(event =>
                        <div key={event.activity_id} className="first">
                            <h1>{event.title}</h1>

                        </div>
                    )}

                </div>
                <Link to="/home/news-and-event-section"> <button>المزيد من الأنشطة والاخبار </button></Link>
            </div>

        )
    }
}
export default EventNews;