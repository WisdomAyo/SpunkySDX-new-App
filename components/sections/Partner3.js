
import Link from "next/link"

export default function Partner3() {
    return (
        <>

            <section className="tf-section tf_partner">
                <div className="overlay">
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-title" data-aos="fade-up" data-aos-duration={800}>
                                <h2 className="title">
                                    Our Partners
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="partner-wrapper style3" data-aos="fade-up" data-aos-duration={800}>
                                <Link href="/" className="image">
                                    <img src="/assets/images/partner/01.png" alt="" />
                                </Link>
                                <Link href="/" className="image ">
                                    <img className="active" src="/assets/images/partner/02.png" alt="" />
                                </Link>
                                <Link href="/" className="image">
                                    <img src="/assets/images/partner/03.png" alt="" />
                                </Link>
                                <Link href="/" className="image">
                                    <img src="/assets/images/partner/04.png" alt="" />
                                </Link>
                                <Link href="/" className="image">
                                    <img src="/assets/images/partner/05.png" alt="" />
                                </Link>
                                <Link href="/" className="image">
                                    <img src="/assets/images/partner/06.png" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt56">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-title" data-aos="fade-up" data-aos-duration={800}>
                                <h2 className="title">
                                The backers
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="partner-wrapper style3" data-aos="fade-up" data-aos-duration={800}>
                                <Link href="/" className="image">
                                    <img src="/assets/images/partner/01.png" alt="" />
                                </Link>
                                <Link href="/" className="image ">
                                    <img className="active" src="/assets/images/partner/02.png" alt="" />
                                </Link>
                                <Link href="/" className="image">
                                    <img src="/assets/images/partner/03.png" alt="" />
                                </Link>
                                <Link href="/" className="image">
                                    <img src="/assets/images/partner/04.png" alt="" />
                                </Link>
                                <Link href="/" className="image">
                                    <img src="/assets/images/partner/05.png" alt="" />
                                </Link>
                                <Link href="/" className="image">
                                    <img src="/assets/images/partner/06.png" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
