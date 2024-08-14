import Chart1 from "../elements/Chart1"
import CounterUp from "../elements/CounterUp"


export default function Token1() {
    return (
        <>

            <section className="tf-section tf-token">
                <div className="overlay">
                    <img src="/assets/images/backgroup/bg_home2.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-title" data-aos="fade-up" data-aos-duration={800}>
                                <h2 className="title">
                                Tokenomics
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="counter_wrapper">
                                    <div className="box">
                                        <div className="image">
                                            <img src="/assets/images/common/counter_1.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <p className="desc">Funded Projects</p>
                                            <div className="box-couter counter">
                                                <div className="number-content">
                                                    <span className="count-number" data-to={359} data-speed={2000} data-inviewport="yes"><CounterUp count={359} time={1} /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="image">
                                            <img src="/assets/images/common/counter_2.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <p className="desc">Unique Participants</p>
                                            <div className="box-couter counter">
                                                <div className="number-content">
                                                    <span className="count-number" data-to={742} data-speed={2000} data-inviewport="yes"><CounterUp count={742} time={1} /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="image">
                                            <img src="/assets/images/common/counter_3.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <p className="desc">Raised Capital</p>
                                            <div className="box-couter counter">
                                                <div className="number-content">
                                                    <span>$</span><span className="count-number" data-to={17} data-speed={2000} data-inviewport="yes"><CounterUp count={17} time={1} /></span><span>M</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="image">
                                            <img src="/assets/images/common/counter_4.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <p className="desc">Initial Market Cap</p>
                                            <div className="box-couter counter">
                                                <div className="number-content">
                                                    <span>$</span><span className="count-number" data-to={32} data-speed={2000} data-inviewport="yes"><CounterUp count={32} time={1} /></span><span>M</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="char_wrapper">
                                    <ul className="describe_chart">
                                    <li>
                                            <img src="/assets/images/chart/color_4.png" alt="" />
                                            <div className="desc">
                                                <p className="name">Liquidity</p>
                                                <p className="number">30%</p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="/assets/images/chart/color_7.png" alt="" />
                                            <div className="desc">
                                                <p className="name">Presale, IDO and public sales</p>
                                                <p className="number">15%</p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="/assets/images/chart/color_2.png" alt="" />
                                            <div className="desc">
                                                <p className="name">Staking Reward and Ecosystem Developemt</p>
                                                <p className="number">30%</p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="/assets/images/chart/color_5.png" alt="" />
                                            <div className="desc">
                                                <p className="name">Buyback and Token Burn</p>
                                                <p className="number">10%</p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="/assets/images/chart/color_3.png" alt="" />
                                            <div className="desc">
                                                <p className="name">Team and Advisors</p>
                                                <p className="number">6%</p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="/assets/images/chart/color_6.png" alt="" />
                                            <div className="desc">
                                                <p className="name">Investor</p>
                                                <p className="number">4%</p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="/assets/images/chart/color_1.png" alt="" />
                                            <div className="desc">
                                                <p className="name">Airdrop and Mining</p> 
                                                <p className="number">5%</p>
                                            </div>
                                        </li>
                                        
                                    </ul>
                                    <div className="chart_inner" data-aos="fade-up" data-aos-duration={800}>
                                        <div className="content_inner">
                                            <img src="/assets//images/chart/subtract1.png" alt="" className="rounded-circle" />
                                            <p>Token Distrubu</p>
                                        </div>
                                        <Chart1 />
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
