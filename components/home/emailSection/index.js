import React, { useState } from 'react'
import styles from './emailSection.module.scss';
const RemoteImage = '/assets/images/remote.png';

export default function EmailSection() {
    const [toggle, setToggle] = useState(true);
    return (
        <div>
            <div className={styles.emailSectionAllContentAlignment} id="#contact">
                <div className='container'>
                    <div className={styles.grid}>
                        <div className={styles.gridItems}>
                            <h4>
                                Let’s have a cup
                                of <span>Coffee/Beer</span>
                            </h4>
                            {
                                toggle ? (
                                    <>
                                        <div className={styles.emailGrid}>
                                            <div className={styles.emailGridItems}>
                                                <input type="text" placeholder='Enter Name' />
                                            </div>
                                            <div className={styles.emailGridItems} onClick={() => setToggle(false)}>
                                                <div className={styles.icon}>Next</div>
                                            </div>
                                        </div></>
                                ) : (
                                    <>
                                        <div className={styles.emailGrid}>
                                            <div className={styles.emailGridItems}>
                                                <input type="text" placeholder='Enter Email' />
                                            </div>
                                            <div className={styles.emailGridItems}>
                                                <div className={styles.icon}>Send</div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                        <div className={styles.gridItems}>
                            <div className={styles.image}>
                                <img src={RemoteImage} alt="RemoteImage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
