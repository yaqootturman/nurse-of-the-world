import React, {useRef,useEffect} from 'react'
import { Link } from "react-router-dom";
import "./header.css";
import { TweenMax, Power3 } from "gsap";

function Header(){
  let header = useRef(null);
  let logo = useRef(null);


  useEffect(()=> {
      TweenMax.to(
          header,
          .8,
          {
              opacity:1.3,
              y : 3.6,
              ease: Power3.easeOut,
              delay: 0.6
          }
      )
      TweenMax.to(
        logo,
        .8,
        {
            opacity:1.3,
            y : 3.6,
            ease: Power3.easeOut,
            delay: 0.3
        }
    )
  },[])

      return (
            <div className="container">
              <div ref={el => (header = el)} className="list">
                <ul>
                    <li className="active"> <Link tolink="/home"> من  نحن</Link></li>
                    <li> <Link tolink="/news"> الاخبار</Link> </li>
                    <li> <Link tolink="/events"> الأحداث</Link></li>
                    <li> <Link tolink="/articles"> المقالات</Link></li>
                    <li> <Link tolink="/contact-us"> التواصل معنا </Link></li>
                    <li> <Link tolink="/join-us"> <button>انضم لنا</button> </Link></li>

                </ul> 
              </div>
                <div  ref={el => (logo = el)} className="logo">
                    <h1> <span>فريق</span> ممرضين حول العالم</h1>
            </div>
            </div>
        )
    }

export default Header;