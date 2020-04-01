import React, { Component } from 'react'
import './home.css';
import Footer from '../../FixedComponents/Footer/Footer';
import Header from '../../FixedComponents/Header/Header';
import FirstDiv from '../FirstUISection/FirstDiv';
import EventNews from '../EventsandNewsSection/EventsNewsSection/EventNews';
import Articles from '../Articles/ArticleSection/Articles';
import Volunteer from '../VolunteerSection/Volunteer';
import CalendarSection from '../CalendarSection/CalendarSection';
import axios from 'axios';

class Home extends Component {

    state = {
        articles: [],
    }
    componentDidMount(){
        axios.get('/api/home/').then((data) => {
            console.log(data);
        })
            .catch( error=>{
            console.log(error)

        })

    }

    render(){
        return (
            <>
             <Header></Header>
                <div id="section2" class="all-home">
                    <FirstDiv ></FirstDiv>
                    <EventNews></EventNews>
                    <CalendarSection></CalendarSection>
                    <Articles></Articles>
                    <Volunteer></Volunteer>
                </div>
            <Footer></Footer>
            </>
        )
    }
}

export default Home;