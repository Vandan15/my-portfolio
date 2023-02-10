import React from 'react'
import Footer from '../footer';
import Header from '../header';
import ClientSection from './clientSection';
import EmailSection from './emailSection';
import HeroBanner from './heroBanner';
import MyJourney from './myJourney';
import Porfolio from './porfolio';
import ServiceSection from './serviceSection';
export default function HomePage() {
  return (
    <div>
        <Header/>
        <HeroBanner/>
        <ServiceSection/>
        <MyJourney/>
        <ClientSection/>
        {/* <EmailSection/> */}
        <Porfolio/>
        <Footer/>
      
    </div>
  )
}
