import React from 'react';
import Description from "../../components/description/Description";
import styles from './AboutPage.module.css';

const AboutPage = () => {
    const data = { title: "Title 2", description: "description 2" };

    return (
        <div className={styles.container}>
            <h1>About Page</h1>
            <Description data={data} />
        </div>
    );
}

export default AboutPage;
