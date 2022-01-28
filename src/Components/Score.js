import React from "react";
import styles from "../Styles/Score.module.css";
import { useStopwatch } from "react-timer-hook";

const Score = (props) => {
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: true });

    function getScore() {
        return 3600*hours + 60*minutes + seconds;
    }

    function getTime() {
        return [hours, minutes, seconds];
    }

    return (
        <div className={styles.container}>
            <div>Time elapsed:</div>
            <div>{hours}:{minutes}:{seconds}</div>
        </div>
    );
}

export default Score;
