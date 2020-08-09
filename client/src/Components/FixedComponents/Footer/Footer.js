import React from 'react'
import "./footer.css";
function Footer() {


    return (
        <div id="section6" className="all">
            <div className="footer-container">
                <div className="Subscribe">
                    <h1>اشتراك</h1>
                    <hr></hr>
                    <h3>! للمزيد من الأخبار اشترك معنا</h3>
                    <input placeholder="الايميل الخاص بك@ hotmal.com"></input>
                    <br></br>
                    <button type="submit">تقديم </button>

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
                </div>

            </div>

        </div>


    )
}
export default Footer;