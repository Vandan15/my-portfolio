import React from 'react'
import styles from './serviceSection.module.scss';
import Slider from "react-slick";
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

export default function ServiceSection() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
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
                <div className='container'>
                    <div className={styles.grid}>
                        <div className={styles.gridItems}>
                            <div className={styles.textStyle}>
                                <p>Key Knowledge</p>
                                <span>
                                    Investing my knowledge in building a technical
                                    environment that contributes in boosting growth, engagement and productivity.
                                </span>
                            </div>
                        </div>
                        <div className={styles.gridItems}>
                            <Slider {...settings}>
                                <div>
                                    <div className={styles.sliderCard}>
                                        <div className={styles.iconDesign}>
                                            <img src={ComminicationIcon} alt="BlueIcon" />
                                        </div>
                                        <h4>Communication</h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the industrys standard dummy text ever since the 1500s.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.sliderCard}>
                                        <div className={styles.iconDesign}>
                                            <img src={ReactIcon} alt="BlueIcon" />
                                        </div>
                                        <h4>React JS</h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the industrys standard dummy text ever since the 1500s.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.sliderCard}>
                                        <div className={styles.iconDesign}>
                                            <img src={NextIcon} alt="BlueIcon" />
                                        </div>
                                        <h4>Next JS</h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the industrys standard dummy text ever since the 1500s.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.sliderCard}>
                                        <div className={styles.iconDesign}>
                                            <img src={VueIcon} alt="BlueIcon" />
                                        </div>
                                        <h4>Vue JS</h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the industrys standard dummy text ever since the 1500s.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.sliderCard}>
                                        <div className={styles.iconDesign}>
                                            <img src={NodeIcon} alt="BlueIcon" />
                                        </div>
                                        <h4>Express JS | REST APIs</h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the industrys standard dummy text ever since the 1500s.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.sliderCard}>
                                        <div className={styles.iconDesign}>
                                            <img src={GraphQLIcon} alt="BlueIcon" />
                                        </div>
                                        <h4>GraphQL</h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the industrys standard dummy text ever since the 1500s.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.sliderCard}>
                                        <div className={styles.iconDesign}>
                                            <img src={UIIcon} alt="BlueIcon" />
                                        </div>
                                        <h4>UI/UX Design</h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the industrys standard dummy text ever since the 1500s.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.sliderCard}>
                                        <div className={styles.iconDesign}>
                                            <img src={TailwindIcon} alt="BlueIcon" />
                                        </div>
                                        <h4>Tailwind</h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the industrys standard dummy text ever since the 1500s.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.sliderCard}>
                                        <div className={styles.iconDesign}>
                                            <img src={BootstrapIcon} alt="BlueIcon" />
                                        </div>
                                        <h4>Bootstrap</h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the industrys standard dummy text ever since the 1500s.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <div className={styles.sliderCard}>
                                        <div className={styles.iconDesign}>
                                            <img src={GrowthIcon} alt="BlueIcon" />
                                        </div>
                                        <h4>Product Management</h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the industrys standard dummy text ever since the 1500s.
                                        </p>
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
