import React from "react"

function VenueTypes() {
    return (
        <section className="venue">
            <p className="venue__title">Venue Types</p>
            <div className="venue__row">
                <a href="/" className="venue__tile-50 venue-1">
                    <div className="tile-name">5 Star Weddings</div>
                </a>
                <a href="/" className="venue__tile-50 venue-2">
                    <div className="tile-name">Beach Weddings</div>
                </a>
            </div>

            <div className="venue__row venue__row-2">
                <div className="venue__row-2-left">
                    <a href="/" className="venue__tile-25 venue-3">
                        <div className="tile-name">Resorts</div>
                    </a>
                    <a href="/" className="venue__tile-25 venue-4">
                        <div className="tile-name">Banquet Halls & Lawns / Farmhouses</div>
                    </a>
                </div>
                <div className="venue__row-2-right">
                    <p className="venue__row-2-right-title">Destination Weddings</p>
                    <div className="venue__row-2-right-col">
                        <div className="venue__links">
                            <a href="/">Lorem / ipsum</a>
                            <a href="/">Lorem / ipsuming</a>
                            <a href="/">Lorem / ipsum</a>
                            <a href="/">Lorem / ipsuming</a>
                            <a href="/">Lorem / ipsum</a>
                            <a href="/">Loremers / ipsum</a>
                            <a href="/">Lorem / ipsum</a>
                        </div>
                        <div className="venue__links">
                            <a href="/">Loremer / ipsumus</a>
                            <a href="/">Lorem / ipsum</a>
                            <a href="/">Loremers / ipsum</a>
                            <a href="/">Lorem / ipsum</a>
                            <a href="/">Loremings / ipsum</a>
                            <a href="/">Lorem / ipsum</a>
                            <a href="/" className="venue__links__cta">
                                view all &rarr;
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VenueTypes
