import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

function HeaderCarousel() {
    return (
        <section className="header-carousel">
            <Carousel>
                <a href="/#" className="hc-one">
                    <div className="hc-one__content">Lorem ipsum dolor sit.</div>
                </a>
                <div className="hc-two">
                    <a href="/#" className="hc-two__left">
                        <div className="hc-two__left__content">Lorem, ipsum dolor.</div>
                    </a>
                    <a href="/#" className="hc-two__right">
                        <div className="hc-two__right__content">Lorem, ipsum dolor.</div>
                    </a>
                </div>
            </Carousel>
        </section>
    )
}

export default HeaderCarousel
