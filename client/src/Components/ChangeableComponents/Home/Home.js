import React, { Component } from 'react'
import axios from 'axios';
import Footer from '../../FixedComponents/Footer/Footer';
import Header from '../../FixedComponents/Header/Header';
import FirstDiv from '../FirstUISection/FirstDiv';
import EventNews from '../EventsandNewsSection/EventsNewsSection/EventNews';
import Articles from '../Articles/ArticleSection/Articles';
import Volunteer from '../VolunteerSection/Volunteer';


class Home extends Component {
    state = {
        articles: [],
        activites: [],
        events: [],

    }
    componentDidMount() {

        axios.get('/api/home').then(({ data }) => {
            var allData = data;
            this.setState(
                {
                    activites: allData[0],
                    articles: allData[1],
                    events: allData[2],
                }
            )


        })
            .catch(error => {
                console.log("something error", error.response);
            })
    }
    render() {

        return (
            <>
                <Header></Header>
                <div id="section2">
                    <FirstDiv> </FirstDiv>

                    <div className="soical-media">
                        <ul className="social-network social-circle">
                            <li><a href="https://www.google.com/" className="icotwitter" title="twitter"> <i className="fab fa-twitter fa-2x"></i></a></li>
                            <li><a href="https://www.google.com/" className="icofacebook" title="facebook"><i className="fab fa-facebook-f fa-2x"></i></a></li>
                            <li><a href="https://www.google.com/" className="icoinstagram" title="instagram"><i className="fab fa-instagram fa-2x"></i></a></li>
                            <li><a href="https://www.google.com/" className="icoLinkedin" title="Linkedin"><i className="fab fa-linkedin-in fa-2x"></i></a></li>
                        </ul>


                    </div>

                    <EventNews eventsData={this.state.activites}></EventNews>
                    <Articles articlesData={this.state.articles}></Articles>
                    <Volunteer></Volunteer>
                </div>
                <Footer></Footer>
            </>
        )
    }
}

export default Home;