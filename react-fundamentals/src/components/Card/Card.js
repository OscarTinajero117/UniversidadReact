import React from 'react';
import styles from './Card.module.css';

const Card = (props) =>(
    <div className={styles.card}>
        <h2> { props.name } </h2>
        <hr/>
        <p> { props.description } </p>
    </div>
);

export default Card;