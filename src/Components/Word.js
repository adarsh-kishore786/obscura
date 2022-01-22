import React from "react";
import styles from "../Styles/Word.module.css";

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

const Word = () => {
    let words = require('an-array-of-english-words').filter((word) => word.length <= 5);
    return (
        <div className={styles.word}>
            {words[getRandomNumberBetween(0, words.length)]}
        </div>
    );
}

export default Word;
