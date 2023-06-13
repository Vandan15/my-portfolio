import React from 'react'
import styles from './myJourney.module.scss';
const SlackIcon = '/assets/icons/gmail.png';
const MeetIcon = '/assets/icons/google-meet.svg';
const GitIcon = '/assets/icons/git-hub.svg';
const SkypeIcon = '/assets/icons/skype.svg';
const WhatsIcon = '/assets/icons/whatsapp.svg';

export default function MyJourney() {
    const handleClick = (link) => {
        window.open(link,'_blank')
    }
    return (
        <div>
            <div className={styles.myJourneyAllContentAlignment} id="#journey">
                <div className='container'>
                    <div className={styles.pageTitle}>
                        <h2>My Journey</h2>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.gridItems}>
                            <h4>Sr. Frontend Web Developer</h4>
                            <h5>LANET Pvt Ltd, 2022-Present</h5>
                            <p>
                                Working as a senior React javascript Developer. Also I am working & communicating with Foreign clients and parallaly providing mentorship to Interns/Trainees. Pitching to clients for increasing company's growth.</p>
                            <h6>2023</h6>
                        </div>
                        <div className={styles.gridItems}>
                            <h4>Programmer Analyst</h4>
                            <h5>LANET Pvt Ltd, 2022</h5>
                            <p>
                                I was working as a Junior React Javascript Developer. Accomplished expert knowledge on CRMs, Blogs & E-commerce sites built with expert knowledge of React JS & Next JS.
                            </p>
                            <h6>2021</h6>
                        </div>
                        <div className={styles.gridItems}>
                            <h4>Intern/Trainee</h4>
                            <h5>LANET Pvt Ltd, 2021</h5>
                            <p>
                                I did internship/training in Vue JS, React JS & Node JS. My role was to learn and work with senior developers to understand development flows and be familiar with clients.
                            </p>
                            <h6>2020</h6>
                        </div>
                        <div className={styles.gridItems} id="#contact">
                            <h4>Bachelor of Engineering</h4>
                            <h5>S.S Agrawal Institute of Engineering & Technology, 2016-2020</h5>
                            <p>
                                I started my career with bachelor degree in Computer Engineering.
                                I was passionately learning Advanced Programming and creating User Defined Projects.
                            </p>
                            <h6>2019</h6>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardGridItems} onClick={() => handleClick('mailto:vandankhamkar1@gmail.com')}>
                            <div>
                                <img src={SlackIcon} alt="gmail" />
                            </div>
                            <div>
                                <span>Gmail</span>
                            </div>
                        </div>
                        <div className={styles.cardGridItems} onClick={() => handleClick('https://meet.google.com/')}>
                            <div>
                                <img src={MeetIcon} alt="google meet" />
                            </div>
                            <div>
                                <span>Meet</span>
                            </div>
                        </div>
                        <div className={styles.cardGridItems} onClick={() => handleClick('https://github.com/Vandan15')}>
                            <div>
                                <img src={GitIcon} alt="github" />
                            </div>
                            <div>
                                <span>GitHub</span>
                            </div>
                        </div>
                        <div className={styles.cardGridItems} onClick={() => handleClick('skype:vandankhamkar1@gmail.com?call')}>
                            <div>
                                <img src={SkypeIcon} alt="skype" />
                            </div>
                            <div>
                                <span>Skype</span>
                            </div>
                        </div>
                        <div className={styles.cardGridItems} onClick={() => handleClick('https://wa.me/8128770872')}>
                            <div>
                                <img src={WhatsIcon} alt="whatsapp" style={{'max-width':'unset'}} />
                            </div>
                            <div>
                                <span>Whatsapp</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
