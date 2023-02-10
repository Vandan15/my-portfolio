import React from 'react'
import styles from './footer.module.scss';
const LinkdinIcon = '/assets/icons/linkdin.svg';
const FacebookIcon = '/assets/icons/facebook.svg';
const InstaIcon = '/assets/icons/insta.svg';
const twitterIcon = '/assets/icons/twt.svg';
export default function Footer() {
  const handleClick = (link) => {
    window.open(link,'_blank')
  }
  return (
    <div>
      <div className={styles.footeralignment}>
        <div className='container'>
          <div className={styles.socialMediaAlignment}>
            <div>
              <img src={LinkdinIcon} alt="LinkdinIcon" title="LinkedIn" onClick={() => handleClick("https://www.linkedin.com/in/vandan-khamkar-525aa8144/")} />
            </div>
            <div>
              <img src={FacebookIcon} alt="FacebookIcon" title="Facebook"  onClick={() => handleClick("https://www.facebook.com/vandankhamkar2/")}/>
            </div>
            <div>
              <img src={InstaIcon} alt="InstaIcon" title="Instagram"  onClick={() => handleClick("https://www.instagram.com/khamkarvandan/")}/>
            </div>
            <div>
              <img src={twitterIcon} alt="twitterIcon" title="Twitter" onClick={() => handleClick("https://twitter.com/vandan115/")} />
            </div>
          </div>
          <p>vandankhamkar1@gmail.com | +91 8128770872</p>
          <span>@ Copyright {new Date().getFullYear} | Vandan Khamkar</span>
        </div>
      </div>
    </div>
  )
}
