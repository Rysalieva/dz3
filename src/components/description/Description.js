import React from 'react';
import styles from './Description.module.css';

const Description = ({ data }) => {
    return (
        <div className={styles.container}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
        </div>
    );
}

export default Description;
