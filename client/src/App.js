import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Components/ChangeableComponents/Home/Home';

function App() {
  return (
    <Router>
        <Switch>
          <Home></Home>
        </Switch> 
       </Router>
  );
}

export default App;
