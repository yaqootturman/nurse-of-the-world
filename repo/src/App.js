import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomeUI from './Components/Changeable-Components/Home/HomeUI';


function App() {
  return (
    <Router>
        <Switch>
        <Route exact path ="/" component={HomeUI} />
        </Switch> 
       </Router>
  );
}

export default App;