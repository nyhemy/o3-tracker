import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {

    const {id, name, image} = props;

    return (
        <div className={styles.card}>
            <img className={styles.image} src={image} alt="card image" />
            <div>{name}</div>
            <div>{id}</div>
        </div>
    );
}

export default Card;