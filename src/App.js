import React from 'react';

// const URL = 'http://api.open-notify.org/astros.json'

class App extends React.Component {

    state = {
        spacePeople: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(({people}) => this.setState(({ spacePeople: people })))
    }

    render() {
        return (
            <div>
                {this.state.spacePeople.map((spaceMan) => <h1>{spaceMan.name}</h1>)}
            </div>
        )
    }
}

export default App;