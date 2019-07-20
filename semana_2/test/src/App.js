import React from "react";

import "./App.css";

function Text (props) {
    return (
        <span className="text">
            {props.text}
        </span>
    )
}

function Title () {
    return (
        <h1 className="title">
            <Text text="Title"></Text>
        </h1>
    )
}

function Paragraph () {
    return (
        <p className="paragraph"> 
            <Text text="Paragraph"></Text> 
        </p>
    )
}

function App () {
    return (
        <div>
            <Title />
            <Paragraph />
        </div>
    );
}

export default App;