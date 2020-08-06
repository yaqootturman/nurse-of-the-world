import React ,{useRef, useEffect} from 'react';
import "./firstDiv.css";
import { Link } from 'react-router-dom';
import homeLogo from './homeLogo.png';
import {TweenMax,Power3} from 'gsap';


function FirstDiv(){
    let home = useRef(null);
    let breif = useRef(null);
    useEffect(() => {
        TweenMax.to(
            home,
            .8,
            {
                ease: Power3.easeInOut,
                delay: 1.2,
                opacity: 1
            }
        )
        TweenMax.to(
            breif,
            .8,
            {
                ease: Power3.easeInOut,
                delay: 1,
                opacity: 1
            }
        )
       
    }, []) 
        return(

            <div className="div-one">
                <div className="div-one-logo">
                    <img alt="logo" ref={el => (home = el) } src={homeLogo}></img>
                </div>
                <div className="paragraph">
                    <p ref={el => (breif = el)}>مهتمنا هي  تعزيز كفاءة التعليم والتدريب والدور القيادي للشباب عن طريق دعم جيل جديد من الشباب ليصبحوا قادة متعلمين ، مهنيين مهرة ، ورواداَ يلهمون أفراد عائلاتهم للتكاثف وتحقيق الازدهار</p>
                    <Link to="/home/details-about-us"> <button>تعرف على المزيد عنا</button></Link>
                </div>
            

            </div>

            )
    }

export default FirstDiv;