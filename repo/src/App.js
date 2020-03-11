import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from './Components/Fixed-Components/Footer/Footer';


function App() {
  return (
    <Router>
        <Switch>
            <Footer></Footer>
  
        </Switch> 
       </Router>
  );
}

export default App;