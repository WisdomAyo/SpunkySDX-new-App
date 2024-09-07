import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Whitepaper() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="WhitePaper" className="mt56">
                <div>
                    <section className="tf-section details mt56">
                        <div className="container">
                            <div className="row">
                                {/* <article className="article" data-aos="fade-right" data-aos-duration={1200} data-aos-delay={200}>
                                    <div className="project_detail project-box-style5">
                                        <span className="boder" />
                                        <div className="img-box">
                                            <div className="image">
                                                <img className="mask" src="/assets/images/common/project_88.png" alt="" />
                                                <div className="shape">
                                                    <img src="/assets/images/common/shape2.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h5 className="heading">Codyfight IGO</h5>
                                                <p className="desc">CTHG / BUSD</p>
                                            </div>
                                        </div>
                                        <div className="content-inner">
                                            <p className="sub">We are preparing the sale</p>
                                            <div className="kyc">
                                                <div className="icon">
                                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_330_8904)">
                                                            <path d="M20.9966 3.1972C18.3528 3.1972 15.7898 2.28628 13.739 0.617859C12.7264 -0.205953 11.2747 -0.205953 10.2621 0.617859C8.21132 2.28633 5.64826 3.1972 3.00454 3.1972C2.17899 3.1972 1.50977 3.86642 1.50977 4.69198V8.69819C1.50977 13.8375 3.82398 18.7037 7.81066 21.9471L9.04111 22.9482C10.7649 24.3506 13.2364 24.3506 14.9602 22.9482L16.1906 21.9471C20.1772 18.7037 22.4915 13.8373 22.4915 8.698C22.4915 7.15993 22.4915 5.71452 22.4915 4.69165C22.4914 3.86609 21.8221 3.1972 20.9966 3.1972Z" fill="url(#paint0_linear_330_8904)" />
                                                            <path d="M12.0005 22.6812C11.7123 22.6812 11.4304 22.581 11.2069 22.3991L8.85349 20.4845C7.13457 19.086 5.7229 17.289 4.77118 15.2878C3.81947 13.2867 3.31641 11.0576 3.31641 8.84162V5.66242C3.31641 5.27781 3.63085 4.95075 4.01495 4.93046C6.6341 4.79197 9.16619 3.82072 11.2069 2.16049C11.4305 1.97856 11.7123 1.87842 12.0005 1.87842C12.2887 1.87842 12.5706 1.97856 12.7941 2.16044C14.8349 3.82072 17.367 4.79197 19.9862 4.93046C20.3702 4.95075 20.6846 5.27776 20.6846 5.66232V8.84143C20.6846 11.0574 20.1815 13.2865 19.2298 15.2877C18.2781 17.289 16.8665 19.086 15.1476 20.4845L12.7941 22.3991C12.5706 22.5811 12.2887 22.6812 12.0005 22.6812Z" fill="url(#paint1_linear_330_8904)" />
                                                            <path d="M12.0001 21.8032C11.7362 21.8032 11.4781 21.7115 11.2734 21.5449L9.11862 19.7919C7.54473 18.5114 6.25222 16.8661 5.38083 15.0338C4.50944 13.2015 4.04883 11.1605 4.04883 9.13153V6.22061C4.04883 5.86847 4.33673 5.56904 4.6884 5.5504C7.08652 5.42358 9.40497 4.53431 11.2734 3.01417C11.4781 2.84762 11.7362 2.75586 12.0001 2.75586C12.264 2.75586 12.5221 2.84758 12.7267 3.01412C14.5952 4.53431 16.9137 5.42358 19.3118 5.5504C19.6635 5.56899 19.9513 5.86838 19.9513 6.22047V9.1313C19.9513 11.1603 19.4907 13.2013 18.6193 15.0336C17.7479 16.866 16.4554 18.5114 14.8815 19.7919L12.7267 21.5449C12.5221 21.7115 12.264 21.8032 12.0001 21.8032Z" fill="url(#paint2_linear_330_8904)" />
                                                            <path d="M22.4908 4.69167C22.4908 3.86612 21.8216 3.19722 20.996 3.19722C18.3523 3.19722 15.7893 2.28631 13.7384 0.617882C13.2321 0.205976 12.6161 0 12 0V24C13.0488 24 14.0976 23.6494 14.9595 22.9482L16.19 21.9472C20.1766 18.7038 22.4908 13.8374 22.4909 8.69802C22.4908 7.15991 22.4908 5.71449 22.4908 4.69167Z" fill="url(#paint3_linear_330_8904)" />
                                                            <path d="M19.8321 6.98386C19.362 6.51374 18.5997 6.61012 18.1295 7.08024L12.2637 12.946C12.2065 13.0032 12.0449 13.1116 12.0003 13.1116C11.9557 13.1116 11.8905 13.0996 11.8332 13.0424L9.58478 10.7939C9.11461 10.3238 8.40054 10.3238 7.93038 10.7939C7.46021 11.264 7.41202 11.9299 7.88219 12.4001L16.8571 21.375C20.2043 18.3532 22.2209 14.128 22.4657 9.62654L19.8321 6.98386Z" fill="url(#paint4_linear_330_8904)" />
                                                            <path d="M16.1905 21.9473C19.036 19.6322 21.0291 16.4903 21.9372 13.0125L16.5121 7.58735C15.3798 6.39149 13.7774 5.7417 12.0005 5.7417C8.61517 5.74165 5.88472 8.47215 5.88477 11.8575C5.88477 13.6344 6.53455 15.2368 7.73046 16.369L14.2508 22.8894C14.45 23.0886 14.7677 23.1049 14.9862 22.9271L16.1905 21.9473Z" fill="url(#paint5_linear_330_8904)" />
                                                            <path d="M12.0012 18.0692C15.432 18.0692 18.2133 15.288 18.2133 11.8571C18.2133 8.42627 15.432 5.64502 12.0012 5.64502C8.57031 5.64502 5.78906 8.42627 5.78906 11.8571C5.78906 15.288 8.57031 18.0692 12.0012 18.0692Z" fill="url(#paint6_linear_330_8904)" />
                                                            <path d="M17.0167 8.19336L12.2637 12.9463C12.2065 13.0035 12.0449 13.1119 12.0003 13.1119C11.9557 13.1119 11.8905 13.0999 11.8332 13.0427L9.58478 10.7942C9.11461 10.3241 8.40054 10.3241 7.93038 10.7942C7.46021 11.2644 7.41202 11.9303 7.88219 12.4004L13.3942 17.9124C16.1539 17.2797 18.2124 14.809 18.2124 11.8574C18.2124 10.4871 17.7683 9.22061 17.0167 8.19336Z" fill="url(#paint7_linear_330_8904)" />
                                                            <path d="M12 15.4231C11.2938 15.4231 10.6298 15.148 10.1304 14.6486L7.88192 12.4002C7.41176 11.9301 7.41176 11.1678 7.88192 10.6976C8.35204 10.2275 9.1143 10.2275 9.58451 10.6976L11.833 12.9461C11.8902 13.0033 11.9554 13.0153 12 13.0153C12.0446 13.0153 12.1099 13.0033 12.1671 12.9461L18.1293 6.98394C18.5994 6.51382 19.3617 6.51382 19.8318 6.98394C20.302 7.4541 20.302 8.21636 19.8318 8.68652L13.8697 14.6486C13.3703 15.148 12.7063 15.4231 12 15.4231Z" fill="url(#paint8_linear_330_8904)" />
                                                        </g>
                                                        <defs>
                                                            <linearGradient id="paint0_linear_330_8904" x1="3.21075" y1="1.13301" x2="21.3033" y2="19.2255" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#B5DBFF" offset={1} />
                                                                <stop offset={1} stopColor="#76E2F8" />
                                                            </linearGradient>
                                                            <linearGradient id="paint1_linear_330_8904" x1="23.8061" y1="22.0166" x2="7.79805" y2="6.00844" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#B5DBFF" offset={1} stopOpacity={0} />
                                                                <stop offset="0.2428" stopColor="#93CEF6" stopOpacity="0.243" />
                                                                <stop offset="0.5763" stopColor="#6ABFEC" stopOpacity="0.576" />
                                                                <stop offset="0.8403" stopColor="#51B5E5" stopOpacity="0.84" />
                                                                <stop offset={1} stopColor="#48B2E3" />
                                                            </linearGradient>
                                                            <linearGradient id="paint2_linear_330_8904" x1="8.90497" y1="7.29012" x2="15.937" y2="14.3221" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#EDF5FF" offset={1} />
                                                                <stop offset={1} stopColor="#D5E8FE" />
                                                            </linearGradient>
                                                            <linearGradient id="paint3_linear_330_8904" x1="14.1804" y1="12.4043" x2="-0.266307" y2="5.46988" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#B5DBFF" offset={1} stopOpacity={0} />
                                                                <stop offset="0.1734" stopColor="#8FC5E9" stopOpacity="0.173" />
                                                                <stop offset="0.4541" stopColor="#56A4C8" stopOpacity="0.454" />
                                                                <stop offset="0.6955" stopColor="#2D8DB1" stopOpacity="0.696" />
                                                                <stop offset="0.8853" stopColor="#147EA2" stopOpacity="0.885" />
                                                                <stop offset={1} stopColor="#0B799D" />
                                                            </linearGradient>
                                                            <linearGradient id="paint4_linear_330_8904" x1="19.7072" y1="15.2085" x2="14.7632" y2="11.4523" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#B5DBFF" offset={1} stopOpacity={0} />
                                                                <stop offset="0.1734" stopColor="#8FC5E9" stopOpacity="0.173" />
                                                                <stop offset="0.4541" stopColor="#56A4C8" stopOpacity="0.454" />
                                                                <stop offset="0.6955" stopColor="#2D8DB1" stopOpacity="0.696" />
                                                                <stop offset="0.8853" stopColor="#147EA2" stopOpacity="0.885" />
                                                                <stop offset={1} stopColor="#0B799D" />
                                                            </linearGradient>
                                                            <linearGradient id="paint5_linear_330_8904" x1="18.8751" y1="18.7321" x2="10.6352" y2="10.4921" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#B5DBFF" offset={1} stopOpacity={0} />
                                                                <stop offset="0.1734" stopColor="#8FC5E9" stopOpacity="0.173" />
                                                                <stop offset="0.4541" stopColor="#56A4C8" stopOpacity="0.454" />
                                                                <stop offset="0.6955" stopColor="#2D8DB1" stopOpacity="0.696" />
                                                                <stop offset="0.8853" stopColor="#147EA2" stopOpacity="0.885" />
                                                                <stop offset={1} stopColor="#0B799D" />
                                                            </linearGradient>
                                                            <linearGradient id="paint6_linear_330_8904" x1="9.11179" y1="8.9678" x2="15.0994" y2="14.9554" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#B9DD39" offset={1} />
                                                                <stop offset={1} stopColor="#90CC1C" />
                                                            </linearGradient>
                                                            <linearGradient id="paint7_linear_330_8904" x1="17.6467" y1="15.4942" x2="15.4202" y2="13.2676" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#66BB00" stopOpacity={0} offset={1} />
                                                                <stop offset={1} stopColor="#66BB00" />
                                                            </linearGradient>
                                                            <linearGradient id="paint8_linear_330_8904" x1="11.4533" y1="7.28845" x2="17.6549" y2="13.49" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#0B799D" offset={1} />
                                                                <stop offset={1} stopColor="#07485E" />
                                                            </linearGradient>
                                                            <clipPath id="clip0_330_8904">
                                                                <rect width={24} height={24} fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <p>This IDO requires KYC verification.</p>
                                            </div>
                                            <div className="boder-st" />
                                            <div className="total">
                                                <p className="active">1 BUSD = 47,619 CTHG</p>
                                                <p>1 CTHG = 0,021 BUSD</p>
                                            </div>
                                            <div className="boder-st" />
                                            <div className="content-progress-box style2">
                                                <p className="white mb-1">Start TBA</p>
                                                <div className="progress-bar" data-percentage="70%">
                                                    <p className="progress-title-holder">
                                                        <span className="progress-number-wrapper">
                                                            <span className="progress-number-mark">
                                                            </span>
                                                        </span>
                                                    </p>
                                                    <div className="progress-content-outter">
                                                        <div className="progress-content" />
                                                    </div>
                                                </div>
                                                <p className="white flex"> <span>0 BUSD</span><span>6,365,071 / 8,476,182 CTHG</span></p>
                                            </div>
                                            <div className="boder-st mt0" />
                                            <div className="bottom">
                                                <p>Fixed Price <br />
                                                    Registration TBA <br />
                                                    Sale TBA <br />
                                                    Base allocation: $0</p>
                                            </div>
                                        </div>
                                    </div>
                                </article> */}
                                <div className="sidebar" data-aos="fade-left" data-aos-duration={1200} data-aos-delay={200}>
                                    <div className="prodect-content">
                                        <h4 className="heading mb10">Executive Summary</h4>
                                        <p>SpunkySDX is a ground-breaking, decentralized multi-chain meme token designed to address the
loss of assets to theft in the crypto space. It leverages an inbuilt advanced Artificial Intelligence (AI)-
based tool to track stolen cryptocurrency tokens/coins across different Ethereum Virtual Machine
(EVM) compatible blockchains, from Decentralized wallets to Centralized Exchanges (CEX).</p>

<p>Compared to the manual traditional method of asset tracking through complex on-chain analysis,
SpunkySDX offers a proactive, stress-free, one-stop tool that makes tracking of stolen EVM-based
assets easier. Consequently, it contributes to the security of the Web3 ecosystem for cryptocurrency
investors and users. </p>

<p>While asset tracking is our central solution, SpunkySDX allows its users and investors to earn
passive revenue by mining and staking with a longevity-focused Annual Percentage Rate (APR)
model; and gain insightful analytic on crypto projects for profitable investment decisions through its
news aggregator feature available on mobile devices. Furthermore, SpunkySDX features a
launchpad for Bitcoin Ordinance tokens and a Decentralized Autonomous Organization (DAO)
structure that allows token holders to vote on important issues affecting the project.</p>
                                        <div className="spacing" />
                                        <ul className="social justify-content-start mb30">
                                        <li>
                                                <Link href="https://web.facebook.com/SpunkySDX/" target="_blank">
                                                <svg width="32" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="roundClip">
      <circle cx="12" cy="12" r="12" />
    </clipPath>
  </defs>
  <g clip-path="url(#roundClip)">
    <path d="M22.676 0H1.324C0.593 0 0 0.593 0 1.324v21.353C0 23.407 0.593 24 1.324 24h11.498v-9.294H9.622v-3.622h3.2V8.349c0-3.168 1.933-4.894 4.756-4.894 1.353 0 2.515 0.1 2.853 0.145v3.311l-1.958 0.001c-1.533 0-1.828 0.729-1.828 1.796v2.355h3.655l-0.476 3.622h-3.179V24h6.237C23.407 24 24 23.407 24 22.676V1.324C24 0.593 23.407 0 22.676 0z" fill="#798DA3"/>
  </g>
</svg>


                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://twitter.com/spunkysdx" target="__blank">
                                                    <svg width={22} height={18} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22 2.17863C21.1819 2.5375 20.3101 2.77537 19.4012 2.89087C20.3362 2.33262 21.0499 1.45537 21.3854 0.398C20.5136 0.91775 19.5511 1.28488 18.5254 1.48975C17.6976 0.608375 16.5179 0.0625 15.2309 0.0625C12.7339 0.0625 10.7236 2.08925 10.7236 4.57388C10.7236 4.93138 10.7539 5.27512 10.8281 5.60237C7.0785 5.4195 3.76063 3.62238 1.53175 0.88475C1.14262 1.55988 0.914375 2.33263 0.914375 3.1645C0.914375 4.7265 1.71875 6.11112 2.91775 6.91275C2.19312 6.899 1.48225 6.68863 0.88 6.35725C0.88 6.371 0.88 6.38887 0.88 6.40675C0.88 8.5985 2.44337 10.419 4.4935 10.8384C4.12637 10.9387 3.72625 10.9869 3.311 10.9869C3.02225 10.9869 2.73075 10.9704 2.45712 10.9099C3.0415 12.696 4.69975 14.0091 6.6715 14.0517C5.137 15.2521 3.18863 15.9754 1.07938 15.9754C0.7095 15.9754 0.35475 15.9589 0 15.9135C1.99787 17.2019 4.36563 17.9375 6.919 17.9375C15.2185 17.9375 19.756 11.0625 19.756 5.10325C19.756 4.90387 19.7491 4.71138 19.7395 4.52025C20.6346 3.885 21.3867 3.09163 22 2.17863Z" fill="#798DA3" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            
                                          
                                    
                                            <li>
                                                <Link href="https://t.me/SpunkySDX" target="_blank">
                                                <svg width="32" height="38" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M120 0C53.728 0 0 53.728 0 120s53.728 120 120 120 120-53.728 120-120S186.272 0 120 0zm58.048 78.72l-18.816 88.704c-1.408 6.272-5.12 7.872-10.4 4.928l-28.8-21.248-13.856 13.344c-1.536 1.536-2.816 2.816-5.76 2.816l2.048-29.248 53.312-48.192c2.304-2.048-.512-3.168-3.584-1.152l-65.92 41.632-28.512-8.96c-6.24-1.952-6.336-6.24 1.28-9.216l111.328-43.008c5.12-1.92 9.728 1.216 8.064 8.064z" fill="#798DA3"/>
</svg>

                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://discord.com/invite/kDXQvGXyhE" target="_blank">
                                                <svg width={22} height={26} viewBox="0 0 61 45" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M60.1045 4.99804C55.6205 2.82754 50.726 1.29154 45.6525 0.476042C45.555 0.458542 45.457 0.500042 45.407 0.589042C44.193 2.82154 43.119 5.12754 42.205 7.50854C36.4995 6.70204 30.7445 6.70204 25.071 7.50854C24.157 5.10854 23.0575 2.82154 21.819 0.589042C21.768 0.502542 21.671 0.460042 21.5745 0.476042C16.5005 1.29154 11.605 2.82754 7.1205 4.99804C7.074 5.01904 7.0345 5.04954 7.0065 5.09054C0.516996 14.388 0.068496 23.299 0.606996 32.1535C0.612996 32.247 0.660496 32.334 0.733996 32.388C6.1835 36.199 11.486 38.722 16.7125 40.303C16.81 40.3335 16.914 40.2985 16.977 40.214C18.5575 38.104 19.946 35.875 21.1145 33.555C21.173 33.442 21.1085 33.3125 20.988 33.2845C18.9445 32.8415 17.0065 32.1515 15.1345 31.218C15.0065 31.1525 14.997 30.966 15.1195 30.885C15.4675 30.663 15.8155 30.431 16.153 30.188C16.218 30.142 16.304 30.1355 16.379 30.162C24.953 33.2625 33.814 33.2625 42.3485 30.162C42.4235 30.132 42.5075 30.1385 42.5755 30.1845C42.913 30.4275 43.261 30.6595 43.609 30.8815C43.731 30.9605 43.7235 31.147 43.5955 31.213C41.7235 32.162 39.778 32.8465 37.7255 33.2845C37.6015 33.3125 37.541 33.442 37.602 33.555C38.7975 35.865 40.186 38.104 41.7395 40.214C41.8025 40.2985 41.9065 40.3335 42.004 40.303C47.2465 38.722 52.549 36.1985 58.013 32.388C58.0865 32.334 58.129 32.247 58.134 32.1535C58.7555 22.0595 56.017 13.2075 51.0295 5.09054C51.0025 5.04954 50.9625 5.01904 50.9155 4.99804H60.1045ZM23.725 27.3855C21.47 27.3855 19.5875 25.336 19.5875 22.807C19.5875 20.278 21.4375 18.2285 23.725 18.2285C26.036 18.2285 27.905 20.3055 27.842 22.807C27.842 25.336 26.036 27.3855 23.725 27.3855ZM46.8445 27.3855C44.5895 27.3855 42.707 25.336 42.707 22.807C42.707 20.278 44.5565 18.2285 46.8445 18.2285C49.1545 18.2285 51.0235 20.3055 50.9605 22.807C50.9605 25.336 49.1545 27.3855 46.8445 27.3855Z" fill="#798DA3"/>
</svg>


                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="http://spunkysdx.io">
                                                    <svg width={42} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11 0C4.93457 0 0 4.93457 0 11C0 17.0654 4.93457 22 11 22C17.0654 22 22 17.0654 22 11C22 4.93457 17.0654 0 11 0ZM1.375 11C1.37461 10.1454 1.48831 9.29453 1.71308 8.47H5.13275C4.92335 10.1502 4.92335 11.8498 5.13275 13.53H1.71308C1.48831 12.7055 1.37461 11.8546 1.375 11ZM6.35078 11C6.34995 10.1539 6.40605 9.30861 6.5187 8.47H10.3125V13.53H6.51862C6.40599 12.6914 6.34992 11.8461 6.35078 11ZM11.6875 1.49205C12.5891 1.79592 13.4634 2.6834 14.1601 4.02974C14.6231 4.92439 14.9854 5.96333 15.2369 7.095H11.6875V1.49205ZM10.3125 1.49205V7.09517H6.76328C7.01478 5.96355 7.37713 4.92456 7.84012 4.02991C8.53664 2.6834 9.41089 1.79609 10.3125 1.49205ZM10.3125 14.905V20.5081C9.41089 20.2043 8.53664 19.3168 7.83991 17.9704C7.37692 17.0758 7.01456 16.0368 6.76307 14.9052L10.3125 14.905ZM11.6875 20.5081V14.905H15.2369C14.9854 16.0366 14.6231 17.0756 14.1601 17.9703C13.4634 19.3166 12.5891 20.2039 11.6875 20.508V20.5081ZM11.6875 13.53V8.47H15.4814C15.594 9.30861 15.6501 10.1539 15.6492 11C15.6501 11.8461 15.594 12.6914 15.4813 13.53H11.6875ZM16.8673 8.47H20.2869C20.7377 10.1265 20.7377 11.8735 20.2869 13.53H16.8673C16.9724 12.6908 17.0248 11.8458 17.0242 11C17.0248 10.1542 16.9724 9.30923 16.8673 8.47ZM19.7964 7.095H16.6418C16.3635 5.73053 15.9384 4.47391 15.3814 3.3978C15.1393 2.92471 14.857 2.47331 14.5375 2.04858C16.881 2.98141 18.7678 4.79201 19.7964 7.095ZM7.46268 2.04841C7.14323 2.47313 6.86087 2.92453 6.61873 3.39762C6.06182 4.47378 5.63664 5.73036 5.35838 7.09483H2.20357C3.23225 4.79179 5.11917 2.98119 7.46268 2.04841ZM2.20357 14.905H5.3582C5.63647 16.2695 6.06164 17.5261 6.61856 18.6022C6.8607 19.0753 7.14305 19.5267 7.46251 19.9514C5.11906 19.0186 3.23221 17.208 2.20357 14.905ZM14.5374 19.9516C14.8568 19.5269 15.1391 19.0755 15.3813 18.6024C15.9382 17.5262 16.3634 16.2696 16.6416 14.9052H19.7964C18.7678 17.2082 16.8809 19.0188 14.5374 19.9516Z" fill="#798DA3" />
                                                    </svg>
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className="image mb30">
                                            <img className="boder-20" src="/assets/images/common/details_1.png" alt="" />
                                        </div>
                                        <div className="box">
                                            <h4 className="heading mb10">SpunkySDX has a total supply of five hundred billion </h4>
                                            <p>The project has six phases of developmental milestones from ideation through Presale, through
launch, and continuous expansion. The development team of SpunkySDX consists of professionals
and crypto experts with avid determination and dedication to achieving the core vision of the project..</p>
                                            <p>SpunkySDX has a total supply of five hundred billion (500, 000, 000, 000) tokens adequately
                                            distributed to ensure the success of the project:</p>
                                            <ul>
                                                <li>
                                                    <span>Thirty percent (30%) for presale. </span>
                                                </li>
                                                <li>
                                                    <span>Fifteen percent (15%) for Staking and Ecosystem development. </span>
                                                </li>
                                                <li>
                                                    <span>Thirty percent (30%) for Liquidity. </span>
                                                </li>
                                                <li>
                                                    <span>Six percent (6%) to the Team and Advisors.</span>
                                                </li>
                                                <li>
                                                    <span>Ten percent (10%) for buyback and token burn.
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>Four percent (5%) for Airdrop. </span>
                                                </li>
                                                <li>
                                                    <span>Five percent (4%) for Investors
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="spacing"></div>
                                        <div className="box">
                                            <h4 className="heading mb10">1. Introduction
                                            </h4>
                                            <p>Loss of assets has been an issue in the Web3 space, and manual tracking has proven to cost more
resources. SpunkySDX offers a solution to tackle these lapses while benefiting its users. Using
robust technology developed with the best development practices, SpunkySDX provides an Artificial
Intelligence (AI) based tool that automatically tracks stolen assets while costing lesser resources. In
addition to other use cases such as staking, DAO governance, and a launchpad for Brc-20 tokens,
SpunkySDX aims to be the number one project facilitating a safer ecosystem. </p>
                                            <h6 className="sub-heading">1.1 Background
                                            </h6>
                                            <ul className="mb8">
                                                <p>According to a 2023 crime report by Chainalysis, 2022 had the highest value in dollars of stolen
crypto assets worth $3.5 billion. Manual tracking of assets is challenging because, most times,
hackers use crypto mixers, programs designed to mash up transactions and make it difficult to trace
the movement of stolen assets.
</p>
<p>According to Coinmarketcap, the top ten blockchains by Total Value Locked (TVL) are EVM
compatible. The EVM-compatible blockchains are networks that run on the EVM and whose smart
contracts are consistent with Ethereum's core workings. Examples include Binance Smart Chains,
Arbitrum, Polygon, Avalanche, and many others. These blockchains have similarities in their
operation, and all aim to improve the capacity of Ethereum through lower gas fees, higher speed,
and volumes of transactions per time. EVM chains lead in market share, and most hacks are carried
out on them. Also, research has shown that AI has continued to significantly outperform humans in
accuracy, efficiency, and timely execution of systematic processes. </p>
                                            </ul>
                                            <h6 className="sub-heading">1.2 Mission

                                            </h6>
                                            <ul className="mb8">
                                                <p>We aim to establish a safe ecosystem, devoid of theft, which encourages mass adoption and
investment across multiple EVM-compatible chains by using our inbuilt AI tool to automatedly track
assets across Decentralized Exchange (DEX) and Centralized Exchange (CEX) while maintaining
other solid use cases.

</p>

                                            </ul>

                                            <h6 className="sub-heading">1.3 Vision

                                            </h6>
                                            <ul className="mb8">
                                                <p>To become the number-one renowned project to bring order in the crypto space by bolstering a
secure and accountable environment for users and investors.</p>

                                            </ul>
                                            <h6 className="sub-heading">1.4 Platform
                                            </h6>
                                            <ul className="mb8">
                                                <p>The SpunkySDX platform is a Web3 application offering users decentralized tools and use cases.
SpunkySDX platform provides users with the Artificial Intelligence (AI) tool to track their stolen
assets. This is complemented with a broader use case. Users can stake their SpunkySDX tokens
through the platform, participate in DAO governance, and access the task module for earning
Spunky points.
</p>
<p>SpunkySDX is designed with superb foolproof security and accessibility as part of its philosophy.
Smooth navigation is an integral aspect of its blueprint to forestall the frustrations as encountered
by users on many other platforms. The excellent and secure user interface will not only create user
loyalty and increase crypto interactions for SpunkySDX, but also increase trust and Return on
Investments (ROI) for investors and token holders. </p>
<p>The Web3 application will launch in different phases, progressively implementing features in each
stage. At the Beta version launch, users will get to perform various actions such as asset tracking
and staking. The automated asset tracking feature makes SpunkSDX the best investment option
among meme projects in the crypto space.
</p>
                                            </ul>
                                            
                                        </div>
                                        <div className="spacing"></div>
                                        <div className="box">
                                            <h4 className="heading mb10">2. Problem Statement </h4>
                                            <p>Although Blockchain is in its early stage, it has become popular due to the hype around its enormous
financial benefits. This popularity has been accompanied by a rise in theft that has led to the loss of
assets worth millions of dollars. Users lose assets to theft and are often discouraged by the daunting
complexity of manually tracking their assets on-chain.</p>
<p>Aside from the high frequency of theft, many blockchain projects have terrible user experience and
are not beginner-friendly, making mass adoption harder. This problem causes victims to continually
give up on manually tracking their lost assets because of the time it takes and how inconvenient and
stressful it is. The lack of an easy way or technology to help track assets without stress and
inconvenience is pronounced, which is the gap SpunkySDX fills.
</p>
                                        </div>
                                        <div className="box">
                                            <h4 className="heading mb10">3. SpunkySDX - A Revolutionary Crypto Solution</h4>
                                            <p>Considering the problem and the difficulties highlighted, SpunkySDX offers a ground-breaking
solution to blockchain asset tracking across EVM chains using cutting-edge technology. The
SpunkySDX secure platform with an inbuilt automated AI-based asset tracking tool makes on-chain
tracking of assets easier, cost effective, and handy. It does so with the inputted/entered data:
contract address and transaction hash. </p>
                                        </div>

                                        <div className="box">
                                            <h4 className="heading mb10">4. Use cases

                                            </h4>
                                            <p>Spunky has different use cases such as asset tracking, real-time crypto market insight for crypto
users and investors, a staking platform, a Brc-20 token-based Launchpad, an NFTs marketplace, a
decentralized exchange and wallet, and a decentralized autonomous organization (DAO).</p>
                                            <h6 className="sub-heading">4.1 Asset Tracking

                                            </h6>
                                            <ul className="mb8">
                                                <p>The decentralized nature of cryptocurrencies, while revolutionary, has created opportunities for
malicious actors. Unverified projects, phishing attempts, and Ponzi schemes pose significant threats
to unsuspecting investors and users.

</p>
<p>Identifying and mitigating these risks has become paramount for individual users and the broader
crypto community. Protecting investors and users from these risks requires advanced technology
and proactive, out-of-the-box thinking. The traditional method of on-chain assets tracking has proven
to be slower, time-consuming, and burn through more resources. </p>
<p>SpunkySDX, through its simplified platform, allows users to track their lost assets employing an inbuilt AI technology. Using the contract address and transaction hash inputted on the web application
platform by the user, the system consequently tracks the movement of the assets, and the user gets
a notification on the application when the AI trails the assets to a Centralized Exchange (CEX).
 </p>
 <p>To explain in a better context, Bobby is a crypto user who falls prey to a dusting attack by a hacker
and loses assets he had acquired and stored in a decentralized wallet such as Metamask. Bobby
tries to trail the assets on the blockchain manually. He spends his time doing so and gets frustrated
after a while due to the complex nature of the blockchain technology. Bobby gives up because of
the stressful, daunting, intricate stepwise approach involved in manually tracking his assets. </p>
<p>However, Bobby then decides to engage the SpunkySDX asset tracking tool on the platform to help
him track his assets on-chain. He provides his contract address and transaction hash. Bobby has
time for more productive ventures saving himself the inconvenience and stress. After a while, he
receives a notification on the SpunkySDX application with information on where his assets last went,
which is supposedly a Centralized Exchange (CEX). Equipped with this information, Bobby decides
to do what is in his best interest and follows up by reporting to the CEX. </p>
<p>Bobby gets the information on his stolen asset trail more conveniently without stress as it passes
through different EVM-compatible chains right from when the assets left his decentralized wallet up
to a centralized wallet. Thanks to SpunkySDX!
</p>
<p>SpunkySDX AI compatible tool is succinct in the tracking of lost assets from a decentralized wallet
en route a centralized wallet, as was with Bobby’s case. The advantages of SpunkySDX automated
tracking compared to the traditional method: </p>
<p> <strong>Simplicity: </strong>The traking tool is easy to use because of the user-centred design built for enthusiasts,
newbies, and experienced blockchain users.
</p>
<p> <strong>Automated Asset Tracking: </strong> the tool is solely saddled with the responsibility of the step-to-step
asset tracking with no manual tail keeping requirement from the User.

</p>
                                            </ul>
                                            <h6 className="sub-heading">4.2 Staking
                                            </h6>
                                            <ul className="mb8">
                                                <p>Projects often promise unrealistic Annual Percentage Rate (APR) for staking with models which do
not factor in long-term sustainability. SpunkySDX allows token holders to stake and earn rewards,
providing an opportunity for passive revenue generation. There are clear benefits that stakers enjoy
for locking up their SpunkySDX tokens for stipulated periods. SpunkySDX offers a realistic and
achievable APR focused on long-term sustainability. Moreover, stakers will enjoy immense capital
benefits as the SpunkySDX blockchain goes live on the mainnet; and Stakers stand to benefit from
the launchpad as new projects launch on it. Therefore, SpunkySDX users and investors are
encouraged to stake their tokens not just for the benefits but also to contribute to the liquidity pool
of the project.

</p>

                                            </ul>

                                            <h6 className="sub-heading">4.3 Governance 

                                            </h6>
                                            <ul className="mb8">
                                                <p>SpunkySDX allows token holders to participate in major decisions making of the platform through a
DAO structure. For example, holders and community members can exercise voting rights on crucial
issues pertaining to the project’s development. SpunkySDX considers its community and Users the
real owners of the project. Hence, active participants in its management. This implies that
SpunkySDX token owners and the community can vote or delegate voting rights to other members.</p>

                                            </ul>
                                            <h6 className="sub-heading">4.4 Launchpad for BRC-20 Tokens
                                            </h6>
                                            <ul className="mb8">
                                                <p>New Brc-20 projects have hard times raising funds. The SpunkySDX launchpad is a decentralised
platform where founders will create awareness and generate funds for their projects. It serves as an
interface for early sales of new Brc-20 projects to a ready community, investors, and the public. Brc20 tokens are experimental tokens created using the ordinal protocol on the Bitcoin blockchain. The
SpunkySDX launchpad uniquely makes it easier and affordable for new Brc-20 based projects to
raise funds during Initial Decentralised Exchange Offer (IDO)/ presale prior to their official market
launch.
</p>
<p>The launchpad will ensure that investors can only access authentic projects with no security threats
by subjecting projects to stringent authenticity testing. Thus, the SpunkySDX launchpad will ensure
that both founders and investors are protected.</p>

                                            </ul>
                                            <h6 className="sub-heading">4.5 SpunkySDX Platform
                                            </h6>
                                            <ul className="mb8">
                                                <p>The SpunkySDX platform was carefully designed to ensure optimal Performance, Security,
Scalability, Reliability, Usability, Compatibility, Maintainability, Compliance, Disaster Recovery,
Interoperability.

</p>
<p>Users will get to access the SpunkySDX platform to engage the different utility menus. The
functionality of the platform is centred around user registration, user authentication, wallet
Integration, automated trading, asset tracking, blockchain analysis, AI chatbot, decentralised
governance, DEX integration, NFT Marketplace, token launch on multiple chains (Arbitrum, Binance
Smart Chain (BSC), HAQQ, and Ethereum (ETH) networks), advertising platform, in-app Browser,
multi-Platform Support, task engagement plus reward/earning of Spunky points, crypto market
insights, Swapping, and Staking.</p>

                                            </ul>
                                            
                                        </div>
                                        <div className="box">
                                            <h4 className="heading mb10">5. Tokenomics
                                            </h4>
                                            <h6 className="sub-heading">5.1 Incentive for a secure ecosystem of applications

                                            </h6>
                                            <p>SpunkySDX is built on Arbitrum, Binance Smart Chain, HAQQ, and Ethereum blockchains. The
SpunkySDX symbol is SSDX with a total supply of 500, 000,000,000 (Five Hundred Billion). SSDX
is not mintable.</p>
                                           
                                            <div className="col-md-9">
                                            <div className="project-box-style3_wrapper">
                                            <div className="project-box-style3" data-aos="fade-in" data-aos-duration={800}>
                                            <div className="header_project">
                                                <div className="image">
                                                    <img className="mask" src="/assets/images/common/project_8.jpg" alt="" />
                                                    <div className="shape">
                                                        <img src="/assets/images/common/project_8.png" alt="" />
                                                    </div>
                                                </div>
                                                <h5 className="heading">5.2 Token distribution</h5>
                                            </div>
                                            <div className="content">
                                                <div className="td td1">
                                                    <p>TOKEN DISTRIBUTION</p>
                                                    <p>Staking Rewards and Ecosystem
                                                    Development</p>
                                                    <p>Presale (IDO and IEO)</p>
                                                    <p>Investors</p>
                                                    <p>Liquidity </p>
                                                    <p>Team/Advisors</p>
                                                    <p>Buyback and Token Burn</p>
                                                    <p>Airdrop</p>
                                                    
                                                </div>
                                                <div className="td td4">
                                                    <p>PERCENTAGE</p>
                                                    <p></p>
                                                    <p>30% </p>
                                                    <p>15%</p>
                                                    <p>4% </p>
                                                    <p>30%</p>
                                                    <p>6% </p>
                                                    <p>10% </p>
                                                    <p>5% </p>
                                                </div>
                                                <div className="td td5">
                                                    <p>QUANTITY</p>
                                                    <p>150, 000, 000, 000</p> <p></p>
                                                    <p>75, 000, 000, 000</p>
                                                    <p>20, 000, 000, 000</p>
                                                    <p>150, 000, 000, 000</p>
                                                    <p>30, 000, 000, 000</p>
                                                    <p>50, 000, 000, 000</p>
                                                    <p>25, 000, 000, 000</p>
                                                    
                                                </div>
                                               
                                               
                                                
                                            </div>
                                        </div>
                                                </div>
                                                </div>
                                        </div>
                                        <div className="image mb30">
                                            <img className="boder-20" src="/assets/images/common/details_21.jpg" alt="" />
                                        </div>
                                        <div className="box">
                                            <h4 className="heading mb10">6. Spunky map </h4>
                                            <h6 className="sub-heading">6.1 Phase 1 (Q4 2022– Q2 2023)
                                            </h6>
                                            <ul className="mb8">
                                                <li>
                                                    <span>Project ideation </span>
                                                </li>
                                                <li>
                                                    <span>Team assembly</span>
                                                </li>
                                                <li>
                                                    <span>Website launch </span>
                                                </li>
                                                <li>
                                                    <span>Social media launch </span>
                                                </li>
                                            </ul>
                                            <h6 className="sub-heading">6.2 Phase 2  (Q3 2023) </h6>
                                            <ul className="mb8">
                                                <li>
                                                    <span>Web App Launch</span>
                                                </li>
                                                <li>
                                                    <span>Task for reward program</span>
                                                </li>
                                                <li>
                                                    <span>Strategic partnerships</span>
                                                </li>
                                            </ul>
                                            <h6 className="sub-heading">6.3 Phase 3 (Q4 2023 - Q1 2024)
                                            </h6>
                                            <ul className="mb14">
                                                <li>
                                                    <span>Tokenomics</span>
                                                </li>
                                                <li>
                                                    <span>White paper</span>
                                                </li>
                                                <li>
                                                    <span>Platform Development</span>
                                                </li>
                                                <li>
                                                    <span>Certik Audit/ KYC</span>
                                                </li>
                                            </ul>
                                            <h6 className="sub-heading">6.4 Phase 4 (Q2 2024)</h6>
                                            <ul className="mb14">
                                                <li>
                                                    <span>Mining </span>
                                                </li>
                                                <li>
                                                    <span>Community Building</span>
                                                </li>
                                               
                                            </ul>
                                            <h6 className="sub-heading">6.5 Phase  4(Q3 2024)</h6>
                                            <ul className="mb14">
                                                <li>
                                                    <span>Private Presale</span>
                                                </li>
                                                <li>
                                                    <span>IDO/ IEO/ ICO</span>
                                                </li>
                                                <li>
                                                    <span>SSDX Mobile App launch</span>
                                                </li>
                                                <li>
                                                    <span>Official Launch (DEX/CEX)
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>Staking platform</span>
                                                </li>
                                                <li>
                                                    <span>Buyback and burn. </span>
                                                </li>
                                            </ul>
                                            <h6 className="sub-heading">6.6 Phase 6 (Q4 2024)
                                            </h6>
                                            <ul className="mb14">
                                                <li>
                                                    <span>More DEX/ CEX listing</span>
                                                </li>
                                                <li>
                                                    <span>Massive marketing campaign </span>
                                                </li>
                                                <li>
                                                    <span>Partnerships</span>
                                                </li>
                                                <li>
                                                    <span>Continuous Platform Development</span>
                                                </li>
                                            </ul>
                                            <h6 className="sub-heading">6.7 Phase 7 (Q1 2025)
                                            </h6>
                                            <ul className="mb14">
                                                <li>
                                                    <span>Native Blockchain creation</span>
                                                </li>
                                                <li>
                                                    <span>Launch of Devnet</span>
                                                </li>
                                                <li>
                                                    <span>Testnet </span>
                                                </li>
                                                <li>
                                                    <span>Mainnet </span>
                                                </li>
                                                <li>
                                                    <span>Continuous development and expansion </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="image mb30">
                                            <img className="boder-20" src="/assets/images/common/detail_3.png" alt="" />
                                        </div>
                                        <div className="box">
                                            <h4 className="heading mb10">7. Technology</h4>
                                            <p>The SpunkySDX-Smart Crypto Asset Tracking Solution (S-SCATS) offers a robust and
comprehensive approach to tracking stolen crypto assets. By integrating advanced analytics, realtime monitoring, and secure communication, S-SCATS provides an essential tool for safeguarding
digital assets and enhancing the transparency of the crypto landscape. The technology designs
deployed in the development of S-SCATS were chosen with the users first mindset; and ease of use
has been incorporated to make it simple for first-time users to operate and navigate. Also, our smart
contracts have been audited for security concerns. These smart contracts are public and verifiable.
Other developments have been thoroughly tested to ensure security and optimal use without
hitches, as with our upcoming blockchain, which will undergo a thorough testnet stage. SpunkySDX
platform programming inculcated: </p>
                                            <ul className="mb14">
                                                <li>
                                                    <span>1. Front-end: Nuxt.js (Vue) or React (TypeScript) for building the user interface</span>
                                                </li>
                                                <li>
                                                    <span>2. Back end: Laravel for server-side development and API creation</span>
                                                </li>
                                                <li>
                                                    <span>3. Mobile App: Flutter for cross-platform mobile application development  </span>
                                                </li>
                                                <li>
                                                    <span>4. Database: PostgreSQL for data storage and management</span>
                                                </li>
                                                <li>
                                                    <span>5. In-memory Data Store: Redis for caching and real-time data processing </span>
                                                </li>
                                                <li>
                                                    <span>6. AI: TensorFlow or PyTorch for machine learning and natural language processing in AI chatbot
                                                    development </span>
                                                </li>
                                                <li>
                                                    <span>7. Web3: Web3.js or Ethers.js for EVM-compatible interactions</span>
                                                </li>
                                                <li>
                                                    <span>8. Security: SSL/TLS for secure data transmission, and encryption libraries like Crypto-js or bcrypt
                                                    for data encryption  </span>
                                                </li>
                                                <li>
                                                    <span>9. Version Control: Git with GitHub for tracking code changes and collaborative development </span>
                                                </li>
                                                <li>
                                                    <span>10. Continuous Integration and Deployment: Jenkins, CircleCI, or Travis CI for automated build, test,
                                                    and deployment processes </span>
                                                </li>
                                                <li>
                                                    <span>11. Cloud Services: Google Cloud Platform (GCP) for hosting, storage, and other cloud-based
                                                    services </span>
                                                </li>
                                                <li>
                                                    <span>12. Project Management: ClickUp and Slack for task tracking and collaboration  </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="box">
                                            <h4 className="heading mb10">6. Team</h4>
                                            <div className="team-box-style2">
                                                <div className="image">
                                                    <img src="/assets/images/common/team_1.webp" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h6 className="name">Raul Fajardo
                                                    </h6>
                                                    <p className="position">CEO / Founder</p>
                                                    <p>Raul Fajardo, an experienced leader in the digital landscape, known for his company's unrivalled
Search Engine Optimization services and expansive web development portfolio. Endorsed by
Google and attuned to the pulse of tech innovation, his proficiency spans from web technologies to
cryptocurrencies. Raul's forward-thinking leadership continues to propel his ascent in the digital
marketing industry</p>
                                                </div>
                                            </div>
                                            <div className="team-box-style2">
                                                <div className="image">
                                                    <img src="/assets/images/common/team_3.png" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h6 className="name">Pierre Ortega</h6>
                                                    <p className="position">Software Engineer</p>
                                                    <p>Pierre as a vibrant Software Engineer embodies a culture of curiosity and excellence while
maintaining an optimistic outlook. Pierre’s technical prowess in JavaScript, web design, and his
inclusive aesthetic style makes him a compelling addition to SpunkySDX tech team.
</p>
                                                </div>
                                            </div>
                                            <div className="team-box-style2">
                                                <div className="image">
                                                    <img src="/assets/images/common/team_4.png" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h6 className="name">David Sanchez</h6>
                                                    <p className="position">CEO of Ahorralino and Leográfix</p>
                                                    <p>David Sanchez is a versatile executive and developer, holding pivotal roles across industries. As
the founding CEO of Ahorralino and Leográfix, he has demonstrated expert management and
innovation in financial services and online printing respectively. Further diversifying his portfolio,
David leveraged his technical acumen as a developer at Adverchain, a crypto firm focused on
identifying and mitigating fraud. He has been an integral part of several Project teams, where his
strategic marketing ideas and leadership drove the projects’ progress. His breadth of experience
across multiple sectors underscores his adaptability and value in the team. David is a well-rounded
individual who uses his broad skill set to provide value in multiple areas: Entrepreneurship, Business
Management, Customer Service and QA/App Testing</p>
                                                </div>
                                            </div>
                                            
                                            <div className="team-box-style2">
                                                <div className="image">
                                                    <img src="/assets/images/common/team2.png" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h6 className="name">Wilson Ifeanyi</h6>
                                                    <p className="position">DevOps
                                                    Engineer, and Project Management Professional.</p>
                                                    <p>Wilson is a seasoned Cybersecurity Specialist, Cloud Infrastructure/Security expert, DevOps
Engineer, and Project Management Professional. With his experience cutting across multiple Tech
enterprises, Wils has demonstrated expert management and innovation in Systems Design and
Development, implementing and integrating high-performance technical and cloud solutions to meet
challenging business needs. He has been an integral part of several Project teams, where his
strategic ideas and leadership drove the projects’ progress. His breadth of experience across
multiple sectors underscores his adaptability and value in the team.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="image mb30">
                                            <img className="boder-20" src="/assets/images/common/details_4.jpg" alt="" />
                                        </div>
                                        <div className="box">
                                            <h4 className="heading mb10">9. Conclusion </h4>
                                            <p>SpunkySDX is a contemporary cryptocurrency project anchored on blockchain technology and
Artificial Intelligence to provide a secure, transparent, and efficient commercial ecosystem. Its solidly
built and deployed decentralized blockchain design guarantees immutable transactions across the
network and a scalable Proof-of-Stake. </p>

<p>According to Chainalysis on crypto-related crime, there has been a progressive trend in the value
of assets stolen each year. Hence, the need to transition from laborious manual tracking of assets
to automated processes became imminent. This places SpunkySDX in a market-ready position to
capitalise on these lapses and provide services that crypto users will need on a trusted platform.
Therefore, SpunkySDX has trailed the blaze in the cryptocurrency space, addressing critical issues
such as tracking of stolen assets.</p>
<div className="wrap-btn">
                                            <Link href="/assets/spunky_sdx.pdf" className="tf-button style2">
                                                Download the Copy of SpunkySDX WhitePaper
                                            </Link>
                                        </div>  
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>

                            
                        </div>
                    </section>

                    <section className="tf-section tf_CTA">
                        <div className="container relative">
                            <div className="overlay">
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tf-title left mt56" data-aos="fade-up" data-aos-duration={800}>
                                        <h2 className="title">
                                            Launch on Risebot
                                        </h2>
                                        <p className="sub">Full support in project incubation</p>
                                        <div className="wrap-btn">
                                            <Link href="/submit-IGO-on-chain" className="tf-button style3">
                                                Apply Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="image_cta d-none d-md-block" data-aos="fade-left" data-aos-duration={1200}>
                                        <img className="move4" src="/assets/images/common/img_cta.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                   
                </div>

            </Layout>
        </>
    )
}