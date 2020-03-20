import React from 'react'
import './home.css';
import {Link} from 'react-router-dom';
import Footer from '../../FixedComponents/Footer/Footer';
import Header from '../../FixedComponents/Header/Header';
import FirstDiv from '../FirstUISection/FirstDiv';
import EventNews from '../EventsandNewsSection/EventsNewsSection/EventNews';
import Calendar from '../CalendarSection/Calendar';
import Articles from '../Articles/ArticleSection/Articles';
import Volunteer from '../VolunteerSection/Volunteer';


function Home () {
      

        return (
            <>
             <Header></Header>
                <div class="all-home">
                    <FirstDiv></FirstDiv>
                    <EventNews></EventNews>
                    <Calendar></Calendar>
                    <Articles></Articles>
                    <Volunteer></Volunteer>
                </div>
            <Footer></Footer>
            </>
        )
    }

export default Home;