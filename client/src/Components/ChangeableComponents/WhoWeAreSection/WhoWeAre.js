import React ,{useRef, useEffect} from 'react';
import "./whoWeAre.css";
import {TweenMax,Power3} from 'gsap';


function WhoWeAre(){
    let secondDivLogo= useRef(null);
    useEffect(()=>{
        TweenMax.to(
            secondDivLogo,
            .8,
            {
                ease: Power3.easeInOut,
                delay: 3,
                opacity: 1
            }
        )
    }, [])   
  return(
    <div id="section2" className="div-second">
    <div class="para">
        <p ref={el => (secondDivLogo = el)} >نحن فريق شبابي طبي نتطلع إلى جيل حر قادر متعلم ذو كفاءة عن طريق مساعدة بعضنا
            البعض، نشبك أيدينا سوياُ لنحمل مستقبل أفضل كل شبابنا ومجتمعنا</p>        
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

    )
    }

export default WhoWeAre;