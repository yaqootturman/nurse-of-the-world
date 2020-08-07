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
                <div id="section2" >
                    <FirstDiv> </FirstDiv>
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