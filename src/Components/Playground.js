import React, { useRef } from "react";
import styles from "../Styles/Playground.module.css";

import HeartBar from "./HeartBar";
import Score from "./Score";
import Word from "./Word";

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

class Playground extends React.Component {
    words = [ 'Amul', 'Mega Tower', 'Vindhya', 'Satpura', 'Nilgiris', 'Aravali', 'Karavali', 'Himachal', 'Kailash', 'Everest', 'Nescafe', 'Library', 'Sports', 'Complex', "Girls' Block", 'Mess', 'Canteen', 'Beach'];

    state = {
        text: "",
        words: "",
        visible: false,
        score: 0,
        found: false,
        lives: 5,
        word: `${this.words[getRandomNumberBetween(0, this.words.length)]}`,
    }

    onKeyPress = (event) => {
        event.preventDefault();
        this.setState({text: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        const w = this.state.text;
        this.setState({text: "", words: w, visible: true});
        if (w.toLowerCase() === this.state.word.toLowerCase()) {
            this.setState({found: true});
        }
        setTimeout(() => {
            this.setState({visible: false, score: this.state.score+1});
        }, 1000);
    }

    nextWord = () => {
        this.setState({
            word: `${this.words[getRandomNumberBetween(0, this.words.length)]}`,
            found: false,
        });
    }

    reduceLife = () => {
        this.setState({found: true, lives: this.state.lives-1});
        if (this.state.lives != 0) {
            this.nextWord();
        }
    }

    render() {
        return (
            <div className={styles.playground}>
                <div className={styles.infoBoard}>
                    <HeartBar lives={this.state.lives}/>
                    <div className={`${styles.words} ${this.state.visible ? styles.visible : styles.invisible}`}>
                    {this.state.words}
                    </div>
                    <Score score={this.props.seconds}/>
                </div>
                <form className={styles.main} onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.text} className={styles.text} onChange={this.onKeyPress} autoFocus/>
                </form>
                <Word
                    found={this.state.found}
                    word={this.state.word}
                    reduceLife={this.reduceLife}/>
            </div>
        );
    }
}

export default Playground;
