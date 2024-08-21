'use client'; // This must be at the top of the file

import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Preloader from '../elements/Preloader';
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
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Adjust time to simulate loading

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading ? (
                <Preloader />  // Display Preloader while loading
            ) : (
                <section className="page-title">
                    <div className="swiper-container slider-main">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide>
                                <div className="slider-st2">
                                    <div className="overlay">
                                        <img 
                                            src="/assets/images/backgroup/bg-slider.png" 
                                            alt="" 
                                        />
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="box-slider">
                                                    <div className="content-box">
                                                        <h1 className="title">
                                                            A Decentralized AI Asset Tracking Platform
                                                        </h1>
                                                        <p className="sub-title">
                                                            SpunkySDX leverages an inbuilt advanced Artificial Intelligence(AI)- 
                                                            based tool to track stolen cryptocurrency tokens/coins across   
                                                            <br className="show-destop" />
                                                            different Ethereum Virtual Machine (EVM) compatible blockchains, 
                                                            from Decentralized wallets to Centralized Exchanges (CEX).
                                                        </p>
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
            )}
        </>
    )
}
