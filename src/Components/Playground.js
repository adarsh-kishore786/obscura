import React from "react";
import styles from "../Styles/Playground.module.css";

import HeartBar from "./HeartBar";
import Score from "./Score";

class Playground extends React.Component {
    state = {
        text: "",
        words: "",
        visible: false,
        score: 0,
    }

    onKeyPress = (event) => {
        event.preventDefault();
        this.setState({text: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        const w = this.state.text;
        console.log(w);
        this.setState({text: "", words: w, visible: true});
        setTimeout(() => {
            this.setState({visible: false, score: this.state.score+1});
        }, 1000);
    }

    render() {
        return (
            <div className={styles.playground}>
                <div className={styles.infoBoard}>
                    <HeartBar />
                    <Score score={this.state.score}/>
                </div>
                <div className={`${styles.words} ${this.state.visible ? styles.visible : styles.invisible}`}>
                    {this.state.words}
                </div>
                <form className={styles.main} onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.text} className={styles.text} onChange={this.onKeyPress} autoFocus/>
                </form>
            </div>
        );
    }
}

export default Playground;
