import React from 'react';
import "../Styles/Reset.css";

import Header from "./Header";
import Playground from "./Playground";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Playground />
            </div>
        );
    }
};

export default App;
