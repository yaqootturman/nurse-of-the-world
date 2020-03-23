import React ,{useRef, useEffect}from 'react';
import { Link } from "react-router-dom";
import {TweenMax,Power3} from 'gsap';
import "./header.css";
function Header(){
    let logoanimation = useRef(null);
    let list = useRef(null);
    useEffect(() => {
        TweenMax.to(
            logoanimation,
            .8,
            {
                ease: Power3.easeInOut,
                delay: 1,
                opacity: 1
            }
        )
        TweenMax.to(
            list,
            .8,
            {
                ease: Power3.easeInOut,
                delay: 0.4,
                opacity: 1
            }
        )
    }, [])        



        return (
            <div className="container">
              <div  ref={el => (list = el)} className="list">
                <ul>
                    <li className="active"> <Link tolink="/home"> من  نحن</Link></li>
                    <li className="active"> <Link tolink="/news"> الاخبار</Link> </li>
                    <li> <Link tolink="/events"> الأحداث</Link></li>
                    <li> <Link tolink="/articles"> المقالات</Link></li>
                    <li> <Link tolink="/contact-us"> التواصل معنا </Link></li>
                    <li> <Link tolink="/join-us"> <button>انضم لنا</button> </Link></li>

                </ul> 
              </div>
                <div className="header-logo">
                    <h1  ref={el => (logoanimation = el)}><span>فريق</span> ممرض العالم</h1>
            </div>
            </div>
        )
    }

export default Header;