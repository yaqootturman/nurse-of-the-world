import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Components/ChangeableComponents/Home/Home';
import AllArticles from './Components/ChangeableComponents/Articles/MainPageComponent/AllArticles';
import NewsMainPage from './Components/ChangeableComponents/EventsandNewsSection/EventsNewsPageComponent/NewsMainPage';
import FirstDivMainPage from './Components/ChangeableComponents/FirstUISection/MainPageForFirstSection/FirstDivMainPage';
import Page404 from './Components/Error/Page404';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path ="/" component={Home} />
          <Route exact path ="/home" component={Home} />
          <Route exact path ="/home/article-section" component={AllArticles} />
          <Route exact path ="/home/news-and-event-section" component={NewsMainPage} />
          <Route exact path ="/home/details-about-us" component={FirstDivMainPage} />
          <Route component={Page404} />



        </Switch> 
       </Router>
  );
}

export default App;
