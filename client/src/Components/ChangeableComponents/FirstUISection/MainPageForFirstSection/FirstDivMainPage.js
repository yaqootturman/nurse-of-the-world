import React from 'react';
import SecondaryHeader from '../../SecondaryHeader/SecondaryHeader'
import Footer from '../../../FixedComponents/Footer/Footer';
import "./firstdivmainpage.css";


function FirstDivMainPage(){
    window.scroll({
        top: 0, 
      });  
    return(
        <>
        <SecondaryHeader></SecondaryHeader>
        <div className="all-p">
            <div className="div-second">
                <div class="main-section">
                     <p>نحن فريق شبابي طبي نتطلع إلى جيل حر قادر متعلم ذو كفاءة عن طريق مساعدة بعضنا
                    البعض، نشبك أيدينا سوياُ لنحمل مستقبل أفضل كل شبابنا ومجتمعنا</p>        
                </div>
                <div className="icons">
                    <div className="first-icon">
                            <a className="hover1" title="من نحن؟">
                            <i class="fas fa-users fa-3x"></i>
                                <h1>فريق شبابي طبي تأسس في أكتوبر 2017 نتطلع إلى تطوير المعرفة العلمية والكفاءة العملية
                    والتنمية لدى طلبة الجامعات ونشر الوعي الصحي في المجتمع</h1>
                            </a>
                            
                    </div>
                    <div className="second-icon">
                           <a className="hover2" title="رؤية الفريق" >  
                           <i class="fas fa-eye fa-3x"></i>
                                <h1>
                                    مجتمع معرفي يتبنى الحوار ويقدر العلم والصحة وله دور فعّال في تمكين الشباب وتحفيزهم
                                </h1>
                            </a>
                            
                    </div>
                    <div className="third-icon">
                        <a className="hover3" title="القيم">
                        <i className="fas fa-bullseye-arrow fa-3x"></i>
                        <h1>
                                    <li> الحوار وإنتاج المعرفة</li> 
                                    <li>تقدير قيمة العمل بروح الزمالة وتثمين الانتاج</li> 
                                    <li> الابداع والابتكار</li>
                                    <li>  الاعتمادية والكفاءة</li>   
                                    <li>القيادة المشتركة </li>

                        </h1>
                        </a>
                          
                        </div>
                    <div className="fourth-icon">
                            <a className="hover4" title="أهداف الفريق">
                            <i class="fas fa-file fa-3x"></i>
                            <h1>
                                    <li>تحفيز مشاركة الشباب في المجتمع</li>
                                    <li>زيادة وتحسين المعرفة العلمية والمهنية لدى طلبة الجامعات</li>
                                    <li>نشر الوعي الصحي واالجتماعي في المجتمع</li>
                                    <li>تمكين أدوار الشباب عن طريق دمجهم في برامج وفعاليات ضمن المجتمع</li>
                                    <li>توسيع الفريق وزيادة قدراته وإمكانياته</li>
                            </h1>
                            </a>
                           
                    </div>
                      
                
            </div>
            
        </div>
     </div>
    <Footer></Footer>
    </>

            )
    }

export default FirstDivMainPage;