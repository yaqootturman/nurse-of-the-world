import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './Components/FixedComponents/Header/Header';


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
