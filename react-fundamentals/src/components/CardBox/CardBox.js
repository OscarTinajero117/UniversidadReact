import React from 'react';
import styles from './CardBox.module.css';

const CardBox = (
    {
        name,
        lastName,
        source,
        likes
    }) => (
    <div className={styles.card}>
        <h2> {name} </h2>
        <h3> {lastName} </h3>
        <hr />
        <img
            className={styles.image}
            src={source}
            alt={name + ' ' + lastName }
        />
        <p>Cantidad de Likes: {likes} </p>
    </div>
);

export default CardBox;