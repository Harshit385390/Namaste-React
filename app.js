 import React from "react";
 import ReactDOM from "react-dom/client";
 
const Title = ()=> (
       <h1 className="heading" tabIndex="5"> Namaste react </h1>
);


const Heading = () => (
       <div id="container">
              <Title/>
               <h1 className="head" tabIndex="4"> Namaste react component</h1>
       </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);