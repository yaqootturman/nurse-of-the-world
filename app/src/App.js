import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './Fixed components/Header/Header';


function App() {
  return (
    <Router>
        <Switch>
            <Header></Header>
  
        </Switch> 
       </Router>
  );
}

export default App;
