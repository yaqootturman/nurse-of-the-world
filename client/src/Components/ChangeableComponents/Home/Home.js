import React, { Component,useRef, useEffect}from 'react'
import './home.css';
import Footer from '../../FixedComponents/Footer/Footer';
import Header from '../../FixedComponents/Header/Header';
import homeLogo from './homeLogo.png';
import {TweenMax,Power3} from 'gsap';

function Home () {
    let home = useRef(null);
    let p = useRef(null);
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
            p,
            .8,
            {
                ease: Power3.easeInOut,
                delay: 1,
                opacity: 1
            }
        )
    }, [])        

        return (
            <>
            <Header></Header>
            <div class="all-home">
                <div className="div-one">
                    <div className="div-one-logo">
                        <img  ref={el => (home = el)} src={homeLogo}></img>
                    </div>
                    <div className="paragraph">
                        <p ref={el => (p = el)}>مهتمنا هي  تعزيز كفاءة التعليم والتدريب والدور القيادي للشباب عن طريق دعم جيل جديد من الشباب ليصبحوا قادة متعلمين ، مهنيين مهرة ، ورواداَ يلهمون أفراد عائلاتهم للتكاثف وتحقيق الازدهار</p>
                        <button>المزيد عنا</button>
                    </div>
                  
 
                </div>
                <div className="div-second">
                    <div class="para">
                        <p >مهتمنا هي  تعزيز كفاءة التعليم والتدريب والدور القيادي للشباب عن طريق دعم جيل جديد من الشباب ليصبحوا قادة متعلمين ، مهنيين مهرة ، ورواداَ يلهمون أفراد عائلاتهم للتكاثف وتحقيق الازدهار</p>
                    </div>
                    <div className="icons">
                    <ul>
                        <li><a href="https://www.google.com/" target="_blank"  title="الأهداف"><i class="fas fa-bullseye-arrow fa-3x"></i> </a></li>
                        <li><a href="https://www.google.com/" target="_blank" title="القيم"><i class="fas fa-file fa-3x"></i></a></li>
                        <li><a href="https://www.google.com/"  target="_blank"  title="رؤية الفريق ومهامه"><i class="fas fa-eye fa-3x"></i></a></li>
                        <li><a href="https://www.google.com/" target="_blank"  title="من نحن؟"> <i class="fas fa-users fa-3x"></i></a></li>

                    </ul>
                        
                    </div>
                    
                </div>
                <div className="div-third">
                    
                </div>
                <div className="div-fourth">
                    
                    </div>
                <div className="div-fifth">
                    
                </div>
                <div className="div-sixth">
                    
                    </div>
            </div>
            <Footer></Footer>
            </>
        )
    }
export default Home;