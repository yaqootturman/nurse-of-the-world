import React from 'react';

const Page404 = ({ location }) => (
    <div>
       <h2 style={{color: "red", textAlign: "center"}} >No match found for <code>{location.pathname}</code></h2>
    </div>
 );
 export default Page404