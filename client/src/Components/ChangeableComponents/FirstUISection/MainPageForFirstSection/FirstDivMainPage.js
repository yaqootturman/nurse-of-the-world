import React ,{useRef, useEffect} from 'react';
import {TweenMax,Power3} from 'gsap';
import SecondaryHeader from '../../SecondaryHeader/SecondaryHeader'
import Footer from '../../../FixedComponents/Footer/Footer';
import "./firstdivmainpage.css";


function FirstDivMainPage(){
    window.scroll({
        top: 0, 
      });
        let words= useRef(null);
        let listFour = useRef(null);
        let listOne = useRef(null);
        let listTwo = useRef(null);
        let listThree = useRef(null);


        useEffect(()=>{
            TweenMax.to(
                words,
                .8,
                {
                    ease: Power3.easeInOut,
                    delay: 2.4,
                    opacity: 1
                }
            )
            TweenMax.to(
                listOne,
                .8,
                {
                    ease: Power3.easeInOut,
                    delay: 3.4,
                    opacity: 1
                }
            )
            TweenMax.to(
                listTwo,
                .8,
                {
                    ease: Power3.easeOut,
                    delay: 3.2,
                    opacity: 1
                }
            )
            TweenMax.to(
                listThree,
                .8,
                {
                    ease: Power3.easeInOut,
                    delay: 3,
                    opacity: 1
                }
            )
            TweenMax.to(
                listFour,
                .8,
                {
                    ease: Power3.easeInOut,
                    delay: 2.8,
                    opacity: 1
                }
            )
        }, [])   
    return(
        <>
        <SecondaryHeader></SecondaryHeader>
        <div className="div-second">
        <div class="para">
            <p ref={el => (words = el)} >نحن فريق شبابي طبي نتطلع إلى جيل حر قادر متعلم ذو كفاءة عن طريق مساعدة بعضنا
                البعض، نشبك أيدينا سوياُ لنحمل مستقبل أفضل كل شبابنا ومجتمعنا</p>        
        </div>
        <div className="icons">
        <ul> 
            <li ref={el => (listOne = el)}><a href="https://www.google.com/" target="_blank"  title="الأهداف"><i class="fas fa-bullseye-arrow fa-3x"></i> </a></li>
            <li ref={el => (listTwo = el)}><a href="https://www.google.com/" target="_blank" title="القيم"><i class="fas fa-file fa-3x"></i></a></li>
            <li ref={el => (listThree = el)}><a href="https://www.google.com/"  target="_blank"  title="رؤية الفريق ومهامه"><i class="fas fa-eye fa-3x"></i></a></li>
            <li ref={el => (listFour = el)}><a href="https://www.google.com/" target="_blank"  title="من نحن؟"> <i class="fas fa-users fa-3x"></i></a></li>

        </ul>
        <div className="first-icon">
            <p>jdjdjjdjddjd</p>
        </div>
            
        </div>
        
    </div>
    <Footer></Footer>
    </>

            )
    }

export default FirstDivMainPage;