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
const serverIcon = '/assets/icons/server.svg';

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
                <div className='container'>
                    <div className={styles.grid}>
                        <div className={styles.gridItems}>
                            <div className={styles.textStyle}>
                                <p>Expert Knowledge</p>
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
                                            Successful communication helps us better understand people and situations. It helps us overcome diversities, build trust and respect, and create conditions for sharing creative ideas and solving problems.
                                            As a Senior Web Developer I know how to manage/talk with people around me.
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
                                            A deep knowledge on creating re-usable components with knowledge of code optimsation. As a React Developer I convert imaginations into reality. I have 3+ years of experience on React JS Development.
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
                                            SEO Drives High-quality Traffic to Your Website. As a Javascript Developer I use Next JS to perform server side rendering for beter better SEO optimisaion. I have 2+ years of experiece in Next JS Development.
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
                                           Begining of my career I've started with Vue JS. I've 6 months of knowledge of creating Re-usable UIs and templates in Vue JS. I'hve worked on development of Form Builder Application using Vue JS.
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
                                            As a full stack web developer I have a good knowledge to create REST APIs. I have 6 months of hands on knowledge building REST APIs with core 2FA authentications. I use Mongo compass, postman, swagger, Dbeaver tools to manage my Backend Development Process.
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
                                            GraphQL is in need when request is dynamic. I have used GraphQL in React/Next JS to perform optimised API calls.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.sliderCard}>
                                        <div className={styles.iconDesign}>
                                            <img src={UIIcon} alt="BlueIcon" />
                                        </div>
                                        <h4>UX/UI Design</h4>
                                        <p>
                                           As a UX/UI Designer I know how to create eye catching web UIs, Mobile UIs, Prototyping & Wireframes. Also I design social media posts for marketing.
                                        </p>
                                    </div>
                                </div>
                                {/* <div>
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
                                </div> */}
                                <div>
                                    <div className={styles.sliderCard}>
                                        <div className={styles.iconDesign}>
                                            <img src={BootstrapIcon} alt="BlueIcon" />
                                        </div>
                                        <h4>Bootstrap</h4>
                                        <p>
                                            As a web designer I use Bootstrap to create fast and optimised layouts for websites. This helps me to design UIs very quickly.
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
                                           I use Jeera, Monday.com, or ClickUp to manage my Product Development flows. I am very keen to manage my product life cycles delivering milestones on/before time.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.sliderCard}>
                                        <div className={styles.iconDesign}>
                                            <img src={serverIcon} alt="BlueIcon" />
                                        </div>
                                        <h4>Web Hosting</h4>
                                        <p>
                                            I have an expertise to host and configure servers to deploy websites quickly. I configure VPS servers and Proxy servers to get sites deployed.
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
