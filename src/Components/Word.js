import React from "react";
import styles from "../Styles/Word.module.css";
import ReactCSSTransitionGroup from 'react-transition-group';

class Word extends React.Component {

    state = {
        left: `${Math.floor(Math.random() * 100)}vw`,
    }

    onAnimationEnd = () => {
        this.props.reduceLife();
        this.setState({ left: `${Math.floor(Math.random() * 100)}vw`});
    }

    render() {
        if (!this.props.found) {
            return (
                <div
                    className={styles.word}
                    onAnimationIteration={this.onAnimationEnd}
                    style={{left: `${this.state.left}`}}
                >
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
