import React from "react"
import { Link } from "react-router-dom"

function HomeCta() {
    return (
        <section className="home-cta-section">
            <div className="col-50">
                <Link to="/real-weddings" className="home-cta__btn home-cta__btn--one">
                    <p className="home-cta__title">
                        Real Weddings <span className="cta-arrow">&rarr;</span>
                    </p>
                    <p className="home-cta__subtitle">Lorem, ipsum dolor.</p>
                </Link>
            </div>
            <div className="col-50">
                <div className="col-25">
                    <Link to="/#" className="home-cta__btn home-cta__btn--two">
                        <p className="home-cta__title">
                            Ask Our Experts <span className="cta-arrow">&rarr;</span>
                        </p>
                        <p className="home-cta__subtitle">Lorem, ipsum dolor.</p>
                    </Link>
                </div>
                <div className="col-25">
                    <Link to="/#" className="home-cta__btn home-cta__btn--three">
                        <p className="home-cta__title">
                            Photos <span className="cta-arrow">&rarr;</span>
                        </p>
                        <p className="home-cta__subtitle">Lorem ipsum dolor sit amet.</p>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HomeCta
