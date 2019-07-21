import React from "react";

class App extends React.Component {
    constructor () {
        super();

        this.state = {
            post: "o que você está pensando?" 
        };
    }

    handleChange (value) {
        return this.setState({post: value});
    }

    render () {
        return (
            <div>
                <textarea 
                    value={this.state.post}
                    onChange={(event) => this.handleChange(event.target.value)}></textarea>
                
                <button> Publish </button>
            </div>
        )
    }
}

export default App;