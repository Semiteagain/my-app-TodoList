import React from "react";






function Heading() {
    const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: ""
}
    
        if (currentTime < 12 ) {
            greeting = "Good Morning";
            customStyle.color ="red";
           
           } else if (currentTime < 18) {
             greeting = "Good Afternoon";
             customStyle.color= "green"
           } else {
             greeting = "Good Evening";
             customStyle.color = "blue"
           }
           return (
            <div className="App">
                <h1 style={customStyle}>{greeting}</h1>
            </div>
          );
}

export default Heading;
