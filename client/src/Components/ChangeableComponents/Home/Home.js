import React, { Component,useRef, useEffect}from 'react'
import './home.css';
import Footer from '../../FixedComponents/Footer/Footer';
import Header from '../../FixedComponents/Header/Header';
import homeLogo from './homeLogo.png';
import {TweenMax,Power3} from 'gsap';

function Home () {
    let home = useRef(null);
    let breif = useRef(null);
    let seconddivlogo = useRef(null);
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
        TweenMax.to(
            seconddivlogo,
            .8,
            {
                ease: Power3.easeInOut,
                delay: 3,
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
                        <p ref={el => (breif = el)}>مهتمنا هي  تعزيز كفاءة التعليم والتدريب والدور القيادي للشباب عن طريق دعم جيل جديد من الشباب ليصبحوا قادة متعلمين ، مهنيين مهرة ، ورواداَ يلهمون أفراد عائلاتهم للتكاثف وتحقيق الازدهار</p>
                        <button>المزيد عنا</button>
                    </div>
                  
 
                </div>
                <div className="div-second">
                    <div class="para">
                        <p ref={el => (seconddivlogo = el)} >نحن فريق شبابي طبي نتطلع إلى جيل حر قادر متعلم ذو كفاءة عن طريق مساعدة بعضنا
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
                <div className="div-third">
                    <div className="tittle"></div>
                    <div className="activites-shape"></div>
                    <button>استكشاف المزيد</button>
                    <div>try</div>
                    <div>try</div>
                    <div>try</div>
                    <div>try</div>
                    <div>try</div>

                    
                </div>
                <div className="div-fourth">
                    <div className="article-shape">
                        <div className="first-item">
                          1   
                        </div>
                         <div className="second-item">
                           2 
                        </div>
                        <div className="third-item">
                             3  
                        </div>
                        <h1>tittle1</h1>
                        <h1 >tittle2</h1>
                        <h1 >tittle3</h1> 
                        </div> 
                        
                    <button>استكشاف المزيد</button>

                    </div>
                <div className="div-fifth">
                    
                </div>
                <div className="div-sixth">
                    <h1>كن متطوعاَ</h1>
                    <p>بهدف مساعدة أكبر عدد ممكن من  الأشخاص ، نفتقر دائما إلى المتطوعين المتحمسين
                       <mark> ، إن كنت تريد صنع تغيير في العالم وتتبنى رسالتنا وأهدافنا</mark>
                        يرجى تقديم طلب تطوع أو مراسلتنا </p>
                 <a href="https://www.google.com/"  target="_blank" title="طلب تطوع"><button>تقديم الطلب </button></a>
                    
                    </div>
            </div>
            <Footer></Footer>
            </>
        )
    }

export default Home;