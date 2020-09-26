import React from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styles from './GameStyles.module.css'





function Game() {
    console.log(styles.item1)
    return (
        <div>
            
            <div id="grid" className={styles.grid}>
                <div id="item1" className={`${styles.item1} ${styles.item}`}>1</div>
                <div id="item2" className={`${styles.item2} ${styles.item}`}>2</div>
                <div id="item3" className={`${styles.item3} ${styles.item}`}>3</div>
                <div id="item4" className={`${styles.item4} ${styles.item}`}>4</div>
                <div id="item5" className={`${styles.item5} ${styles.item}`}>5</div>
                <div id="item6" className={`${styles.item6} ${styles.item}`}>6</div>
                <div id="item7" className={`${styles.item7} ${styles.item}`}>7</div>
                <div id="item8" className={`${styles.item8} ${styles.item}`}>8</div>
                <div id="item9" className={`${styles.item9} ${styles.item}`}>9</div>
            </div>
        </div>

    );
}

export default Game;
