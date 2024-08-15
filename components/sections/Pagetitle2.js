'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    loop: false,
    spaceBetween: 0,
    navigation: {
        nextEl: ".btn-next-main",
        prevEl: ".btn-prev-main",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1280: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
}

export default function Pagetitle2() {
    return (
        <>
           

            <section className="page-title">
                
                <div className="swiper-container slider-main">
                    <Swiper {...swiperOptions} className="swiper-wrapper">
                        <SwiperSlide>
                            <div className="slider-st2">
                                {/* <img className="icon icon_1" src="/assets/images/common/icon1_slider_21.png" alt="" />
                                <img className="icon icon_2" src="/assets/images/common/icon2_slider_21.png" alt="" />
                                <img className="icon icon_3" src="/assets/images/common/icon3_slider_21.png" alt="" /> */}
                                <div className="overlay">
                                    <img src="/assets/images/backgroup/bg-slider.png" alt="" />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="box-slider">
                                                <div className="content-box">
                                                    <h1 className="title">A Decentralized
                                                                        AI Asset Tracking
                                                                        Platform</h1>
                                                    <p className="sub-title">SpunkySDX leverages an inbuilt advanced Artificial Intelligence(AI)- 
                                                        based tool to track stolen cryptocurrency tokens/coins across   
                                                        <br className="show-destop" />
                                                        different Ethereum Virtual Machine (EVM) compatible blockchains, from Decentralized wallets to Centralized Exchanges (CEX).</p>
                                                    <div className="wrap-btn">
                                                        <Link href="/faq" className="tf-button style2">
                                                            HOW TO START
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                       
                    </Swiper>
                  
                </div>
            </section>
        </>
    )
}
