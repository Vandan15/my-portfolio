import React from 'react'
import styles from './heroBanner.module.scss';
const HeroImage = '/assets/images/hero-banner-1.jpeg';
const LeftIcon = '/assets/icons/left-arrow.svg';
const LinkdinIcon = '/assets/icons/linkdin.svg';
const FacebookIcon = '/assets/icons/facebook.svg';
const InstaIcon = '/assets/icons/insta.svg';
const twitterIcon = '/assets/icons/twt.svg';

export default function HeroBanner() {
  const handleClick = (link) => {
    window.open(link,'_blank')
  }
  return (
    <div>
      <div className={styles.heroBannercontentAlignment} id="#home">
        <div className='container'>
          <div className={styles.grid}>
            <div className={styles.gridItems}>
              <div className={styles.leftcontent}>
                <span>I’m</span>
                <h2>Vandan Khamkar</h2>
                <h3>Looking for a Senior Position in well known company as a React Frontend Web Developer.</h3>
                <h3>Professionally I am a Javascript Full Stack Web Developer with proficient skills in developing CRMs, E-commerce, Web Portals, Web Apps & Blogs.</h3>
                <h3><i>"My personal commitment to quality and on-schedule delivery makes me stand apart from others."</i></h3> 
                <h3>If you are on the lookout for a hard-working and dedicated person, do connect with me.</h3>
                <hr></hr>
                <a href='mailto:vandankhamkar1@gmail.com'>Email: vandankhamkar1@gmail.com</a>
                <a href='tel:+91 8128770872'>Phone: +91 8128770872</a>
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
                <p>I've 3+ years of working experience creating web applications using React Library. I have keen expertise in communication, creating UIs, Product Management, Integration of SDKs & APIs. See my area of interest. </p>
                <button onClick={() => document.getElementById('#services').scrollIntoView()}>
                  <span>Get me there</span>
                  <img src={LeftIcon} alt="LeftIcon"/>
                </button>
                <div className={styles.socialIcon}>
              <div>
                <img src={LinkdinIcon} alt="LinkdinIcon" title="LinkedIn" onClick={() => handleClick("https://www.linkedin.com/in/vandan-khamkar-525aa8144/")}/>
              </div>
              <div>
                <img src={FacebookIcon} alt="FacebookIcon" title="Facebook" onClick={() => handleClick("https://www.facebook.com/vandankhamkar2/")}/>
              </div>
              <div>
                <img src={InstaIcon} alt="InstaIcon" title="Instagram" onClick={() => handleClick("https://www.instagram.com/khamkarvandan/")}/>
              </div>
              <div>
                <img src={twitterIcon} alt="twitterIcon" title="Twitter" onClick={() => handleClick("https://twitter.com/vandan115/")}/>
              </div>
            </div>
              </div>
            </div>
          </div>
          <div className={styles.cardGrid}>
            <div className={styles.cardGridItems}>
              <h4>3.5+</h4>
              <span>Years Experience</span>
            </div>
            <div className={styles.cardGridItems}>
              <h4>20+</h4>
              <span>Completed Projects</span>
            </div>
            <div className={styles.cardGridItems} id="#services">
              <h4>10+</h4>
              <span>Tech Skills</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
