import React from 'react'
import {Link} from 'react-router-dom';
import './secondaryHeader.css';

export default function SecondartHeader() {
  
    return (
        <div className="secondary-header">
            <div className="left"> 
                <div className="icon">
                    <Link 
                        activeClass="active"
                        to={"/home"}
                        duration= {1000}>
                        <i className="fas fa-arrow-left fa-3x"> 
                        </i>
                    </Link>
                </div>
                <h1>العودة الى القسم الرئيسي</h1>
            </div>
            <div className="right">
            <h1><span>فريق</span> ممرض العالم </h1>

            </div>


        </div>
      
    )
}
