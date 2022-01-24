import React from "react";
import styles from "../Styles/Word.module.css";
import ReactCSSTransitionGroup from 'react-transition-group';

class Word extends React.Component {
    onAnimationEnd() {
        console.log("Ended!");
    }

    render() {
        if (!this.props.found) {
            return (
                <div className={styles.word}>
                    {this.props.word}
                </div>
            );
        }
        else {
            return (
                <></>
            );
        }
    }
}

export default Word;
