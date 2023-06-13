import React from 'react'
import styles from './Portfolio.module.scss';
import Slider from "react-slick";
import Head from 'next/head';
const WebIcon = '/assets/icons/web.png';
const MobileIcon = '/assets/icons/mobile.png';
const LeftIcon = '/assets/icons/slider-left.svg';
const MarketingIcon = '/assets/icons/marketing.png';
const BrandIcon = '/assets/icons/brand.png';
const CustomIcon = '/assets/icons/custom.png';
const UIIcon = '/assets/icons/figma.svg';
const TailwindIcon = '/assets/icons/tailwind.svg';
const ReactIcon = '/assets/icons/react.svg';
const NextIcon = '/assets/icons/next.png';
const VueIcon = '/assets/icons/vue.svg';
const GraphQLIcon = '/assets/icons/graphql.svg';
const NodeIcon = '/assets/icons/node.png';
const BootstrapIcon = '/assets/icons/bootstrap.svg';
const ComminicationIcon = '/assets/icons/chat.png';
const GrowthIcon = '/assets/icons/strategy.png';
const wineCap = '/assets/portfolio/winecap.png';
const kdr = '/assets/portfolio/kdr.png';
const wg = '/assets/portfolio/wg.png';
const craftCenter = '/assets/portfolio/craftcenter.png';
const mcme = '/assets/portfolio/mcme.png';
const webscooby = '/assets/portfolio/webscooby.png';
const cbd = '/assets/portfolio/cbd.png';
const wineday = '/assets/portfolio/wineday.png';
const crm = '/assets/portfolio/crm.png';
const formify = '/assets/portfolio/formify.png';
const silentbird = '/assets/portfolio/silent-birds.png';
const amogh = '/assets/portfolio/amogh.png';
const winedib = '/assets/portfolio/winedib.png';
const tosy = '/assets/portfolio/tosy.png';
const foodtruck = '/assets/portfolio/foodtruck.png';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='slider-right-design'

            onClick={onClick}
        >
            <img src={LeftIcon} alt="LeftIcon" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='slider-arrow-design'

            onClick={onClick}
        >
            <img src={LeftIcon} alt="LeftIcon" />
        </div>
    );
}

export default function Portfolio() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className={styles.servicesSectionAllContent}>
                <div className='container' id="#portfolio">
                    <div className={styles.grid}>
                        <div className={styles.gridItems}>
                            <div className={styles.textStyle}>
                                <p>My Portfolio</p>
                                <span>
                                    My showcase shows skills that I've evolved throughout my employment history
                                </span>
                            </div>
                        </div>
                        <div className={styles.gridItems}>
                            <Slider {...settings}>
                                <div className={styles.sliderCardNew}>
                                    <div className={styles.imgWrapper}>
                                        <img src={wineCap}></img>
                                        <div className={styles.textWrapper}>
                                            Investment Portal (Blog site)
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.sliderCardNew}>
                                    <div className={styles.imgWrapper}>
                                        <img src={kdr}></img>
                                        <div className={styles.textWrapper}>
                                            KDR (SPA & Blog site)
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.sliderCardNew}>
                                    <div className={styles.imgWrapper}>
                                        <img src={formify}></img>
                                        <div className={styles.textWrapper}>
                                            Formify.pro (SaaS Product - Own)
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.sliderCardNew}>
                                    <div className={styles.imgWrapper}>
                                        <img src={silentbird}></img>
                                        <div className={styles.textWrapper}>
                                            Silent Birds (SaaS Product)
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.sliderCardNew}>
                                    <div className={styles.imgWrapper}>
                                        <img src={amogh}></img>
                                        <div className={styles.textWrapper}>
                                            Amogh Ayurved (E-commerce site)
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.sliderCardNew}>
                                    <div className={styles.imgWrapper}>
                                        <img src={wg}></img>
                                        <div className={styles.textWrapper}>
                                            Westgarth Wines (E-commerce site)
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.sliderCardNew}>
                                    <div className={styles.imgWrapper}>
                                        <img src={craftCenter}></img>
                                        <div className={styles.textWrapper}>
                                            Craft Center (E-commerce site)
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.sliderCardNew}>
                                    <div className={styles.imgWrapper}>
                                        <img src={winedib}></img>
                                        <div className={styles.textWrapper}>
                                            WineDib (E-commerce site)
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.sliderCardNew}>
                                    <div className={styles.imgWrapper}>
                                        <img src={mcme}></img>
                                        <div className={styles.textWrapper}>
                                            Mc & Me Tech Serve (LMS site)
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.sliderCardNew}>
                                    <div className={styles.imgWrapper}>
                                        <img src={webscooby}></img>
                                        <div className={styles.textWrapper}>
                                            Webscooby: A software solution (SPA & Blog site)
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.sliderCardNew}>
                                    <div className={styles.imgWrapper}>
                                        <img src={cbd}></img>
                                        <div className={styles.textWrapper}>
                                            CBD Planet (E-commerce site)
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.sliderCardNew}>
                                    <div className={styles.imgWrapper}>
                                        <img src={tosy}></img>
                                        <div className={styles.textWrapper}>
                                            Tosy Auto (SPA site)
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.sliderCardNew}>
                                    <div className={styles.imgWrapper}>
                                        <img src={foodtruck}></img>
                                        <div className={styles.textWrapper}>
                                            Food Truck (SPA & Event site)
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.sliderCardNew}>
                                    <div className={styles.imgWrapper}>
                                        <img src={wineday}></img>
                                        <div className={styles.textWrapper}>
                                            E-Win Day (Game site)
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.sliderCardNew}>
                                    <div className={styles.imgWrapper}>
                                        <img src={crm}></img>
                                        <div className={styles.textWrapper}>
                                            Wine Hub (CRM site)
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
