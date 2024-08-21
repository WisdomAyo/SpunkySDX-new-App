
import Link from "next/link"

export default function Cta3() {
    return (
        <>

            <section className="tf-section tf_CTA">
                <div className="container relative">
                    <div className="overlay">
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tf-title left" data-aos="fade-up" data-aos-duration={800}>
                                <h2 className="title">
                                    Launch on SpunkySDX
                                </h2>
                                <p className="sub">Full support in project incubation</p>
                                <div className="wrap-btn">
                                    <Link href="/" className="tf-button style3">
                                        Launch App
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
        </>
    )
}
