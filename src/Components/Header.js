import React from "react";
import styles from "../Styles/Header.module.css";

const Header = (props) => {
    const pauseOrPlay = () => {
        if (props.pause) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="40" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
                    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                </svg>
            );
        }
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="40" className="bi bi-pause" viewBox="0 0 16 16">
            <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
            </svg>
        );
    }

    return (
        <header className={styles.headerBox}>
            Alphabet Game
            <button className={styles.button}
                    onClick={(e) => {
                        props.toggle();
                    }}>
            {pauseOrPlay()}
            </button>
        </header>
    );
};

export default Header;
