import React from 'react'
import './home.css';
import Footer from '../../FixedComponents/Footer/Footer';
import Header from '../../FixedComponents/Header/Header';
import FirstDiv from '../FirstUISection/FirstDiv';
import WhoWeAre from '../WhoWeAreSection/WhoWeAre';
import EventNews from '../EventsandNewsSection/EventNews';
import Calendar from '../CalendarSection/Calendar';
import Articles from '../ArticlesSection/Articles';
import Volunteer from '../VolunteerSection/Volunteer';


function Home () {
      

        return (
            <>
            <Header></Header>
            <div class="all-home">
               <FirstDiv></FirstDiv>
               <WhoWeAre></WhoWeAre>
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