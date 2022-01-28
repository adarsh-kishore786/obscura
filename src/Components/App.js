import React from 'react';
import "../Styles/Reset.css";

import Header from "./Header";
import Playground from "./Playground";
import Footer from "./Footer";

class App extends React.Component {
    state = {
        pause: false
    }

    toggleGame = () => {
        this.setState({pause: !this.state.pause});
    }

    render() {
        return (
            <div onKeyPress={(e) => console.log(e)}>
                <Header
                    pause={this.state.pause}
                    toggle={this.toggleGame}
                />
                <Playground pause={this.state.pause}/>
                <Footer />
            </div>
        );
    }
};

export default App;
