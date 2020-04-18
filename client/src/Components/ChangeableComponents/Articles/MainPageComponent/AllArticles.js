import React, { Component } from 'react';
import axios from 'axios';
import SecondaryHeader from '../../SecondaryHeader/SecondaryHeader';
import Footer from '../../../FixedComponents/Footer/Footer';
import '../../EventsandNewsSection/EventsNewsPageComponent/newsmainpage.css';
import { Link }from 'react-router-dom';
import ArticleLayout from './ArticleLayout';
    

class AllArticles extends Component {
    state ={
        articleData: [],
        showArticleLayout: false,
        numberButton: null,

    };
   

     componentDidMount(){
        axios.get('/api/home').then(({ data }) => {
            this.setState({articleData: data[1]});
        
         })
         .catch(error => {
            console.log("something error", error.response);
        })
    }
    toggleShowArticleLayout(value){
        this.setState({
            showArticleLayout: !this.state.showArticleLayout,
            numberButton: value -1,

            })
    }
    closePopup() {
        this.setState({
            showPopup: false,
        })
    }
      render(){
        window.scroll({
            top: 0, 
          }); 
          console.log(this.state.articleData);
          console.log(this.state.numberButton, "numberButton")


     return (
        <>
                <SecondaryHeader></SecondaryHeader>
                <div className="news-all">
                    <div className="boxs">
                       <h1>جميع المقالات</h1>
                        <div class="flex-container">
                            {this.state.articleData.map(article =>
                            <div className="article1">
                                <h1>{ article.title}</h1>
                                <button onClick ={()=> this.toggleShowArticleLayout(article.article_id)}> 
                                    {this.state.showArticleLayout ?
                                    <ArticleLayout
                                    closePopup={this.closePopup.bind(this)}
                                    unique={article.article_id}
                                    header ={this.state.articleData && this.state.articleData[this.state.numberButton].title }
                                    text ={this.state.articleData && this.state.articleData[this.state.numberButton].content }
                                     />
                                    :
                                    null

                                    }
                               Open the article </button>
                            </div>
                            )}
                     
                        </div>                        
                    </div>
                        
                </div>
                <Footer></Footer>
    

</>
  
  );
}
}

export default AllArticles;