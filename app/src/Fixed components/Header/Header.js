import React from 'react';
import { Link } from "react-router-dom";

import "./header.css";
function Header(){

        return (
            <div className="container">
              <div className="list">
                <ul>
                    <li className="active"> <Link tolink="/home"> من  نحن</Link></li>
                    <li> <Link tolink="/news"> الاخبار</Link> </li>
                    <li> <Link tolink="/events"> الأحداث</Link></li>
                    <li> <Link tolink="/articles"> المقالات</Link></li>
                    <li> <Link tolink="/contact-us"> التواصل معنا </Link></li>
                    <li> <Link tolink="/join-us"> <button>انضم لنا</button> </Link></li>

                </ul> 

              </div>
                <div className="logo">
                    <h1> <span>فريق</span> ممرضين حول العالم</h1>
            </div>
            </div>
        )
    }

export default Header;
