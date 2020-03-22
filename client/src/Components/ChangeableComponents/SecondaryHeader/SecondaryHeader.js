import React from 'react'
import {Link} from 'react-router-dom';
import './secondaryHeader.css';

export default function SecondartHeader() {
    return (
        <div className="secondary-header">
            <div className="left"> 
                <div className="icon">
                    <Link to='/'>
                        <i className="fas fa-arrow-left fa-3x"> 
                        </i>
                    </Link>
                </div>
                <h1>العودة الى الصفحة الرئيسية </h1>
            </div>
            <div className="right">
            <h1><span>فريق</span> ممرض العالم </h1>

            </div>


        </div>
    )
}
