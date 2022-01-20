import React from "react";
import styles from "../Styles/Score.module.css";

const Score = (props) => {
    return (
        <div className={styles.container}>
            Score: {props.score}
        </div>
    );
}

export default Score;
