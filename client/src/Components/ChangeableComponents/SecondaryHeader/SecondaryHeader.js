import React, { Component } from 'react'
import './secondaryHeader.css';
import history from '../../../history';

export default class SecondartHeader extends Component {
    handleClick(){
        history.push('/')

    }
    render(){
    return (
        <div className="secondary-header">
            <div className="left"> 
                <div className="icon">
                   <i className="fas fa-arrow-left fa-3x">
                   </i>
                   <button onClick={(e) =>this.handleClick(e)}>hi </button>

                </div>
                <h1>العودة الى القسم الرئيسي</h1>
            </div>
            <div className="right">
            <h1><span>فريق</span> ممرض العالم </h1>

            </div>


        </div>
      
    )
}
}