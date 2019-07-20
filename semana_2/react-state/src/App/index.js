import React from "react";

import Title from "./components/title";
import Paragraph from "./components/paragraph";
import Text from "./components/text"

class App extends React.Component {

    constructor (){
        super();

        this.state = {
            numberOfClicks: 0,
            history: [0]
        }
    }

    handleClick () {
        const state = {...this.state};
        let history = [...state.history];
        state.numberOfClicks++;
        history = history.concat(state.numberOfClicks);
        state.history = history;
        return this.setState(state);
    }

    render () {
        return (
            <div>
                <Title />
                <Paragraph />
                <div>
                    <button 
                        onClick={() => this.handleClick()}>

                        click!
                    </button>
                </div>
                <ul>
                    {this.state.history.map((history) => {
                        return (
                            <li key={history}> {history} </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}


export default App;
