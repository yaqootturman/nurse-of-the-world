import React, { useRef, useEffect } from 'react';
import { Link } from "react-scroll";
import { TweenMax, Power3 } from 'gsap';
import "./header.css";
function Header() {

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
      <div className="header-logo">
        <h1 ref={el => (logoanimation = el)}><span> فريق  </span>
        ممرض العالم</h1>
      </div>
      <div ref={el => (list = el)} className="list">
        <ul>
          <li> <Link
            activeClass="active"
            to="section2"
            smooth={true}
            duration={500}
          >الصفحة الرئيسية  </Link></li>
          <li> <Link
            activeClass="active"
            to="section3"
            smooth={true}
            duration={500}
          >الاخبار </Link></li>
          <li> <Link
            activeClass="active"
            to="section5"
            smooth={true}
            duration={500}
          >المقالات</Link> </li>
          <li> <Link
            activeClass="active"
            to="section6"
            smooth={true}
            duration={500}
          >التواصل معنا</Link></li>
          <li className="underline-link"> <Link
            activeClass="active"
            to="section7"
            smooth={true}
            duration={500}>

            <a >
              انضم لنا
               </a>

          </Link></li>

        </ul>
      </div>

    </div >
  )
}

export default Header;