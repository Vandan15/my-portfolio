import React from 'react'
import styles from './clientSection.module.scss';
const RightIcon = '/assets/icons/right.svg';
const ProfileImage = '/assets/images/main-profile.png';

export default function ClientSection() {
  return (
    <div>
        <div className={styles.clientSectionAllContentalignment} id="#about">
            <div className='container'>
                <div className={styles.grid}>
                    <div className={styles.gridItems}>
                        <h4>Hi, I’m Vandan Khamkar &</h4>
                        <h4>I build value through <span>Code</span></h4>
                        <p>#work #life #code #passion #love</p>
                        <h5>What I do?</h5>
                        <div className={styles.learnmore} onClick={() => document.getElementById('#home').scrollIntoView()}>
                            <span>Learn More</span>
                            <img src={RightIcon} alt="RightIcon"/>
                        </div>
                    </div>
                    <div className={styles.gridItems}>
                        <div className={styles.imageStyle}>
                            <img src={ProfileImage} alt="ProfileImage"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
