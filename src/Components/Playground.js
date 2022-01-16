import React from "react";
import styles from "../Styles/Playground.module.css";

class Playground extends React.Component {
    state = {
        text: ""
    }

    onPressed = (event) => {
        event.preventDefault();
        this.setState({text: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        const words = this.state.text;
        console.log(words);
        this.setState({text: ""});
    }

    render() {
        return (
            <div className={styles.playground}>
                <div className={styles.top}>
                    Playtime!
                </div>
                <form className={styles.main} onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.text} onChange={this.onPressed} />
                </form>
            </div>
        );
    }
}

export default Playground;
