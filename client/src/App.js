import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Components/ChangeableComponents/Home/Home';
import AllArticles from './Components/ChangeableComponents/ArticlesSection/AllArticles';
import NewsMainPage from './Components/ChangeableComponents/EventsandNewsSection/NewsMainPage';


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path ="/" component={Home} />
          <Route exact path ="/home/article-section" component={AllArticles} />
          <Route exact path ="/home/news-and-event-section" component={NewsMainPage} />


        </Switch> 
       </Router>
  );
}

export default App;
