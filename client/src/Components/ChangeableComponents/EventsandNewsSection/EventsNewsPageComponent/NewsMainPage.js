import React from 'react';
import SecondaryHeader from '../../SecondaryHeader/SecondaryHeader';
import Footer from '../../../FixedComponents/Footer/Footer';
import './newsmainpage.css';
    
    

function NewsMainPage(){   
    window.scroll({
        top: 0, 
      });   
        return(
            <>
                <SecondaryHeader></SecondaryHeader>
                <div className="news-all">
                    <div className="boxs">
                       <h1>جميع الأحداث</h1>
                        <div class="flex-container">
                        <div className="article1">1
                            <h1>kdkdk</h1>
                        </div>
                        <div className="article1">2
                            <h1>kdkdk</h1>
                        </div>
                        <div className="article1">3
                            <h1>kdkdk</h1>
                        </div>  
                        <div className="article1">4
                            <h1>kdkdk</h1>
                        </div>
                        <div className="article1">5
                            <h1>kdkdk</h1>
                        </div>
                        <div className="article1">6
                            <h1>kdkdk</h1>
                        </div>  
                        <div className="article1">7
                            <h1>kdkdk</h1>       
                        </div>
                        <div className="article1">8
                            <h1>kdkdk</h1>
                        </div>
                        <div className="article1">9
                            <h1>kdkdk</h1>
                        </div>  
                        <div className="article1">10
                            <h1>kdkdk</h1>
                        </div>
                        <div className="article1">11
                            <h1>kdkdk</h1>
                        </div>
                        <div className="article1">12   
                            <h1>kdkdk</h1>
                        </div>  
                        </div>                        
                    </div>
                        
                </div>
                <Footer></Footer>
    
           </>
        )
    }

export default NewsMainPage;