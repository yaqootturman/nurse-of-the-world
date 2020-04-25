import React from 'react'
import "./footer.css";
function Footer() {
  
   
       return (
           <div id="section6"className="all">
            <div className="footer-container">    
                     <div className="Subscribe">
                         <h1>اشتراك</h1>
                         <hr></hr>
                         <h3>! للمزيد من الأخبار اشترك معنا</h3>
                         <input placeholder="الايميل الخاص بك@ hotmal.com"></input>
                         <button type="submit">انضم الان</button>

                    </div>
                    <div className="contact-us">
                        <h1>تواصل معنا</h1>
                        <hr></hr>
                        <h3> 40404048800009970 :  رقم الجوال</h3>
                        <h3> hadeelsalah80"gmail.com:الايميل </h3>

                    </div>
                    <div className="position">
                        <h1>أين نحن؟</h1>
                        <hr></hr>
                        <address>فلسطين- غزة</address>
                        <address> الرمال - شارع التلاتيني</address>
                        <address>الطابق التالت - شقة 5</address>



                    </div>
                  
               </div>

                <div className="soical-media">
                    <ul className="social-network social-circle">
                        <li><a href="https://www.google.com/" className="icotwitter"  title="twitter"> <i className="fab fa-twitter fa-2x"></i></a></li>
                        <li><a href="https://www.google.com/" className="icofacebook" title="facebook"><i className="fab fa-facebook-f fa-2x"></i></a></li>
                        <li><a href="https://www.google.com/"  className="icoinstagram" title="instagram"><i className="fab fa-instagram fa-2x"></i></a></li>
                        <li><a href="https://www.google.com/" className="icoLinkedin" title="Linkedin"><i className="fab fa-linkedin-in fa-2x"></i></a></li>
                    </ul>	


                </div>
                </div>

            
        )
    }
export default Footer;