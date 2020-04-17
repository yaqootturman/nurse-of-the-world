import React, {Component} from 'react';
import axios from 'axios';
import SecondaryHeader from '../../SecondaryHeader/SecondaryHeader';
import Footer from '../../../FixedComponents/Footer/Footer';
import PopUp from './PopUp';
import './newsmainpage.css';
    
    

class NewsMainPage extends Component{  
    constructor(props){
        super(props);
    this.state ={
        activitesData: [],
        showPopup: false,
     
    }
} 
    componentDidMount(){
        axios.get('/api/home').then(({ data }) =>{
            this.setState({ activitesData: data[0] })
        })
        .catch(error =>{
            console.log(error);
        })
    }
    togglePopup() {  
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
         } 


    render(){
        console.log(this.state.activitesData);
     

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
                        {this.state.activitesData.map(activity =>

                        <div className="article1">
                            <h1 key={activity.activity_id}>{activity.title}</h1>
                         
                        </div>

                        
                         )}
                    {this.state.activitesData.map(activity =>
                        <button onClick={this.togglePopup.bind(this)}>   
                        {this.state.showPopup ? <PopUp  
                        text={activity.content}
                        unique={activity.activity_id}  
                        closePopup={this.togglePopup.bind(this)} />  
                        : null  
                    }  
                    {activity.activity_id}</button>
                     )}

                     
                        </div>  
                        
                    </div>
                        
                </div>
                <Footer></Footer>
    
           </>
        )
    }
}

export default NewsMainPage;