import React from "react"

function HomeCta() {
    return (
        <section className="home-cta-section">
            <div className="col-50">
                <a href="/" className="home-cta__btn home-cta__btn--one">
                    <p className="home-cta__title">
                        Real Weddings <span className="cta-arrow">&rarr;</span>
                    </p>
                    <p className="home-cta__subtitle">Lorem, ipsum dolor.</p>
                </a>
            </div>
            <div className="col-50">
                <div className="col-25">
                    <a href="/" className="home-cta__btn home-cta__btn--two">
                        <p className="home-cta__title">
                            Ask Our Experts <span className="cta-arrow">&rarr;</span>
                        </p>
                        <p className="home-cta__subtitle">Lorem, ipsum dolor.</p>
                    </a>
                </div>
                <div className="col-25">
                    <a href="/" className="home-cta__btn home-cta__btn--three">
                        <p className="home-cta__title">
                            Photos <span className="cta-arrow">&rarr;</span>
                        </p>
                        <p className="home-cta__subtitle">Lorem ipsum dolor sit amet.</p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default HomeCta
