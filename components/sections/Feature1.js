

'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".next_slider-10",
        prevEl: ".prev_slider-10",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        750: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
}

export default function Feature1() {
    return (
        <>

            <section className="tf-section fueture">
                <div className="container w_1320">
                    <div className="row">
                        <div className="col-md-12">
                        
                            <div className="tf-title mb30" data-aos="fade-up" data-aos-duration={800}>
                                <h2 className="title mb30">
                                All you need is here
                                </h2>
                            </div>
                        
                            <div className="container_inner">
                                <div className="swiper-container slider-10" data-aos="fade-in" data-aos-duration={1000}>


                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="icon-box">
                                                <div className="top">
                                                    <div className="icon">
                                                        <img src="/assets/images/common/icon_1.png" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h5><Link href="/">Asset Tracking</Link></h5>
                                                        <p>Say good bye to sleepless nights. Track your stolen assets from a DEX wallet to a CEX wallet platform</p>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <img src="/assets/images/backgroup/bg_bt_box_1.png" alt="" />
                                                </div>
                                                <div className="number">
                                                    1
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="icon-box">
                                                <div className="top">
                                                    <div className="icon">
                                                        <img src="/assets/images/common/icon_2.png" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h5><Link href="/">Aggregator </Link></h5>
                                                        <p>Stay informed with the current happening with SpunkySDX news.</p>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <img src="/assets/images/backgroup/bg_bt_box_1.png" alt="" />
                                                </div>
                                                <div className="number">
                                                    2
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="icon-box">
                                                <div className="top">
                                                    <div className="icon">
                                                        <img src="/assets/images/common/icon_r.png" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h5><Link href="/project-list">Reward Program
                                                        </Link></h5>
                                                        <p>Increase your income capacity. Complete simple  and earn daily spunky points.</p>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <img src="/assets/images/backgroup/bg_bt_box_1.png" alt="" />
                                                </div>
                                                <div className="number">
                                                    3
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="icon-box">
                                                <div className="top">
                                                    <div className="icon">
                                                        <img src="/assets/images/common/icon_n.png" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h5><Link href="/">NFT Market Place
                                                        </Link></h5>
                                                        <p>Own unique digital assets with high market value</p>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <img src="/assets/images/backgroup/bg_bt_box_1.png" alt="" />
                                                </div>
                                                <div className="number">
                                                    4
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="icon-box">
                                                <div className="top">
                                                    <div className="icon">
                                                        <img src="/assets/images/common/icon_s.png" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h5><Link href="/project-list">Staking
                                                        </Link></h5>
                                                        <p>Earn up to 5% APY when you stake your SSDX token.</p>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <img src="/assets/images/backgroup/bg_bt_box_1.png" alt="" />
                                                </div>
                                                <div className="number">
                                                    5
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="icon-box">
                                                <div className="top">
                                                    <div className="icon">
                                                        <img src="/assets/images/common/icon_d.png" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h5><Link href="/">DEX
                                                        </Link></h5>
                                                        <p>Seamlessly trade different coins on SpunkySDX</p>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <img src="/assets/images/backgroup/bg_bt_box_1.png" alt="" />
                                                </div>
                                                <div className="number">
                                                    6
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="icon-box">
                                                <div className="top">
                                                    <div className="icon">
                                                        <img src="/assets/images/common/icon_b.png" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h5><Link href="/">Blockchain

                                                        </Link></h5>
                                                        <p>Own unique digital assets with high market value</p>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <img src="/assets/images/backgroup/bg_bt_box_1.png" alt="" />
                                                </div>
                                                <div className="number">
                                                    7
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="icon-box">
                                                <div className="top">
                                                    <div className="icon">
                                                        <img src="/assets/images/common/icon_l.png" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h5><Link href="/">launchpad
                                                        </Link></h5>
                                                        {/* <p>Raise funds easily during the initial stage of your Brc-20 projects</p> */}
                                                    </div>
                                                    <h6>Coming Soon</h6>
                                                </div>
                                                <div className="bottom">
                                                    <img src="/assets/images/backgroup/bg_bt_box_1.png" alt="" />
                                                </div>
                                               
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="next_slider-10 next_slider"><svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 8H16.5M16.5 8L9.75 1.25M16.5 8L9.75 14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </div>
                                <div className="prev_slider-10 prev_slider"><svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 8H1.5M1.5 8L8.25 1.25M1.5 8L8.25 14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </div>
                                <div className="col-md-12 mt30">
                                    <p className="desc text-center mb20">
                                    Experience an all-in-one crypto solution
                                    </p>
                                    <div className="wrap-btn justify-content-center">
                                        <Link href="/submit-IGO-on-chain" className="tf-button style1">
                                            Get Started
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
