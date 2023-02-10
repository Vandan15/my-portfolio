import classNames from 'classnames';
import React, { useState } from 'react'
import styles from './header.module.scss';
const ProfileIcon = '/assets/icons/profile.svg';
const LinkdinIcon = '/assets/icons/linkdin.svg';
const FacebookIcon = '/assets/icons/facebook.svg';
const InstaIcon = '/assets/icons/insta.svg';
const twitterIcon = '/assets/icons/twt.svg';
export default function Header() {
  const [ mobileMenu , setMobileMenu ] = useState(false);
  return (
    <>
      <div className={styles.header}>
        <div className="container">
          <div className={styles.headeralignment}>
            <div className={styles.leftcontent}>
              <div className={styles.logo}>
                <img src={ProfileIcon} alt="ProfileIcon"/>
                <span>Vandan Khamkar</span>
              </div>
              <div className={styles.menu}>
              <a onClick={() => document.getElementById('#about').scrollIntoView()}>About Me</a>
                <a onClick={() => document.getElementById('#journey').scrollIntoView()}>My Journey</a>
                <a onClick={() => document.getElementById('#portfolio').scrollIntoView()}>Portfolio</a>
                <a onClick={() => document.getElementById('#services').scrollIntoView()}>Services</a>
                <a onClick={() => document.getElementById('#contact').scrollIntoView()}>Contact Me</a>
              </div>
            </div>
            <div className={styles.rightcontent}>
              <div>
                <img src={LinkdinIcon} alt="LinkdinIcon" title="LinkedIn"/>
              </div>
              <div>
                <img src={FacebookIcon} alt="FacebookIcon" title="Facebook"/>
              </div>
              <div>
                <img src={InstaIcon} alt="InstaIcon" title="Instagram"/>
              </div>
              <div>
                <img src={twitterIcon} alt="twitterIcon" title="Twitter"/>
              </div>
            </div>
            <div className={styles.mobileMenu} onClick={()=> setMobileMenu(!mobileMenu)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div className={mobileMenu ? classNames(styles.mobileHeader , styles.mobileheaderShow) : classNames(styles.mobileHeader , styles.headerHidden) }>
        <div className={styles.firstContent}>
            <div className={styles.logo}>
                <img src={ProfileIcon} alt="ProfileIcon"/>
                <span>Vandan Khamkar</span>
            </div>
            <div className={styles.close} onClick={()=> setMobileMenu(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
            </div>
        </div>
        <div className={styles.mobileBody}>
        <a onClick={() => document.getElementById('#home').scrollIntoView()}>About Me</a>
                <a onClick={() => document.getElementById('#journey').scrollIntoView()}>My Journey</a>
                <a onClick={() => document.getElementById('#portfolio').scrollIntoView()}>Portfolio</a>
                <a onClick={() => document.getElementById('#services').scrollIntoView()}>Services</a>
                <a onClick={() => document.getElementById('#contact').scrollIntoView()}>Contact Me</a>
                <div className={styles.rightcontent}>
              <div>
                <img src={LinkdinIcon} alt="LinkdinIcon" title="LinkedIn"/>
              </div>
              <div>
                <img src={FacebookIcon} alt="FacebookIcon" title="Facebook"/>
              </div>
              <div>
                <img src={InstaIcon} alt="InstaIcon" title="Instagram"/>
              </div>
              <div>
                <img src={twitterIcon} alt="twitterIcon" title="Twitter"/>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
