import React from 'react'
import styles from './heroBanner.module.scss';
const HeroImage = '/assets/images/hero-banner.jpeg';
const LeftIcon = '/assets/icons/left-arrow.svg';
const LinkdinIcon = '/assets/icons/linkdin.svg';
const FacebookIcon = '/assets/icons/facebook.svg';
const InstaIcon = '/assets/icons/insta.svg';
const twitterIcon = '/assets/icons/twt.svg';

export default function HeroBanner() {
  return (
    <div>
      <div className={styles.heroBannercontentAlignment} id="#home">
        <div className='container'>
          <div className={styles.grid}>
            <div className={styles.gridItems}>
              <div className={styles.leftcontent}>
                <span>I’m</span>
                <h2>Vandan Khamkar</h2>
                <h3>Currently I am looking for a Senior Position in well known company as a React Frontend Web Developer</h3>
                <h3>Professionally I am a Javascript Full Stack Web Developer with proficient skills in developing CRMs, E-commerce, Web Portals, Web Apps & Blogs. My personal commitment to quality and on-schedule delivery makes me stand apart from others. If you are on the lookout for a hard-working and dedicated person, do connect with me.</h3>
                <a>Email: vandankhamkar1@gmail.com</a>
                <a>Phone: +91 812877872</a>
                <a>Location: Navsari, Gujarat, IN</a>
              </div>
            </div>
            <div className={styles.gridItems}>
              <div className={styles.mainProfileImage}>
                <img src={HeroImage} alt="HeroImage"/>
              </div>
            </div>
            <div className={styles.gridItems}>
              <div className={styles.rightContent}>
                <h3>Sr. Frontend Web Developer</h3>
                <p>I've 3+ years of working experience creating web applications using React Library. I have keen expertise in creating UIs, Integration of SDKs & APIs. See my area of interest. </p>
                <button onClick={() => document.getElementById('#services').scrollIntoView()}>
                  <span>Get me there</span>
                  <img src={LeftIcon} alt="LeftIcon"/>
                </button>
                <div className={styles.socialIcon}>
              <div>
                <img src={LinkdinIcon} alt="LinkdinIcon" title="LinkedIn" onClick={() => handleClick()}/>
              </div>
              <div>
                <img src={FacebookIcon} alt="FacebookIcon" title="Facebook" onClick={() => handleClick()}/>
              </div>
              <div>
                <img src={InstaIcon} alt="InstaIcon" title="Instagram" onClick={() => handleClick()}/>
              </div>
              <div>
                <img src={twitterIcon} alt="twitterIcon" title="Twitter" onClick={() => handleClick()}/>
              </div>
            </div>
              </div>
            </div>
          </div>
          <div className={styles.cardGrid}>
            <div className={styles.cardGridItems}>
              <h4>3+</h4>
              <span>Years Experience</span>
            </div>
            <div className={styles.cardGridItems}>
              <h4>15+</h4>
              <span>Completed Projects</span>
            </div>
            <div className={styles.cardGridItems}>
              <h4>10+</h4>
              <span>Tech Skills</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
