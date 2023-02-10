import React, { useState } from 'react'
import styles from './porfolio.module.scss';
const CardImage = '/assets/images/card.png';

export default function Porfolio() {
    const [counter, setCounter] = useState(1);
    return (
        <div>
            <div className={styles.porfolioAllContentAlignment} id="#portfolio">
                <div className='container'>
                    <h1>Portfolio</h1>

                    <div className={styles.tab}>
                        <span onClick={() => setCounter(1)} className={counter == 1 ? styles.active : ''}>UI/UX</span>
                        <span onClick={() => setCounter(2)} className={counter == 2 ? styles.active : ''}>CRMs/SaaS</span>
                        <span onClick={() => setCounter(3)} className={counter == 3 ? styles.active : ''}>E-commerce Portal</span>
                        <span onClick={() => setCounter(4)} className={counter == 4 ? styles.active : ''}>LMS</span>
                        <span onClick={() => setCounter(5)} className={counter == 5 ? styles.active : ''}>Blog sites</span>
                    </div>
                    <div className={styles.mainCard}>
                        {
                            counter == 1 && (
                                <div className={styles.grid}>
                                    <div className={styles.gridItems}>
                                        <div className={styles.cardImage}>
                                            <img src={CardImage} alt="CardImage" />
                                        </div>
                                        <div className={styles.cardDetails}>
                                            <div className={styles.cardDetailsAlignment}>
                                                <h4>Airwave Information World</h4>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                    Ipsum has been the industrys standard dummy text ever since the 1500s.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.gridItems}>
                                        <div className={styles.cardImage}>
                                            <img src={CardImage} alt="CardImage" />
                                        </div>
                                        <div className={styles.cardDetails}>
                                            <div className={styles.cardDetailsAlignment}>
                                                <h4>Airwave Information World</h4>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                    Ipsum has been the industrys standard dummy text ever since the 1500s.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.gridItems}>
                                        <div className={styles.cardImage}>
                                            <img src={CardImage} alt="CardImage" />
                                        </div>
                                        <div className={styles.cardDetails}>
                                            <div className={styles.cardDetailsAlignment}>
                                                <h4>Airwave Information World</h4>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                    Ipsum has been the industrys standard dummy text ever since the 1500s.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.gridItems}>
                                        <div className={styles.cardImage}>
                                            <img src={CardImage} alt="CardImage" />
                                        </div>
                                        <div className={styles.cardDetails}>
                                            <div className={styles.cardDetailsAlignment}>
                                                <h4>Airwave Information World</h4>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                    Ipsum has been the industrys standard dummy text ever since the 1500s.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
