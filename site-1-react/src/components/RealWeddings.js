import React from "react"
import { Link } from "react-router-dom"
import { data } from "./RealWeddingsData"

function RealWeddings() {
    return (
        <section className="real-weddings">
            <p className="real-weddings__title">Real Weddings</p>
            <div className="real-weddings__container">
                <div className="rw__item">
                    <div className="rw__item__row1">
                        <Link to="/real-weddings/rw1" className="rw__photo-box">
                            <div className="rw__photo1"></div>
                        </Link>
                    </div>
                    <div className="rw__item__row2">
                        <Link to="/real-weddings/rw1" className="rw__photo-box">
                            <div className="rw__photo2"></div>
                        </Link>
                        <Link to="/real-weddings/rw1" className="rw__photo-box">
                            <div className="rw__photo3"></div>
                        </Link>
                        <Link to="/real-weddings/rw1" className="rw__photo-box rw__photo-count">
                            <div className="rw__photo4"></div>
                            <div className="rw__photo-count__box">
                                <span>{data.rw1.totalImages}</span>
                                <span>photos</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <p className="rw__item__title">{data.rw1.name}</p>
                        <p className="rw__item__subtitle">{data.rw1.place}</p>
                    </div>
                </div>
                <div className="rw__item">
                    <div className="rw__item__row1">
                        <Link to="/real-weddings/rw2" className="rw__photo-box">
                            <div className="rw__photo5"></div>
                        </Link>
                    </div>
                    <div className="rw__item__row2">
                        <Link to="/real-weddings/rw2" className="rw__photo-box">
                            <div className="rw__photo6"></div>
                        </Link>
                        <Link to="/real-weddings/rw2" className="rw__photo-box">
                            <div className="rw__photo7"></div>
                        </Link>
                        <Link to="/real-weddings/rw2" className="rw__photo-box rw__photo-count">
                            <div className="rw__photo8"></div>
                            <div className="rw__photo-count__box">
                                <span>{data.rw2.totalImages}</span>
                                <span>photos</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <p className="rw__item__title">{data.rw2.name}</p>
                        <p className="rw__item__subtitle">{data.rw2.place}</p>
                    </div>
                </div>
                <div className="rw__item">
                    <div className="rw__item__row1">
                        <Link to="/real-weddings/rw3" className="rw__photo-box">
                            <div className="rw__photo9"></div>
                        </Link>
                    </div>
                    <div className="rw__item__row2">
                        <Link to="/real-weddings/rw3" className="rw__photo-box">
                            <div className="rw__photo10"></div>
                        </Link>
                        <Link to="/real-weddings/rw3" className="rw__photo-box">
                            <div className="rw__photo11"></div>
                        </Link>
                        <Link to="/real-weddings/rw3" className="rw__photo-box rw__photo-count">
                            <div className="rw__photo12"></div>
                            <div className="rw__photo-count__box">
                                <span>{data.rw3.totalImages}</span>
                                <span>photos</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <p className="rw__item__title">{data.rw3.name}</p>
                        <p className="rw__item__subtitle">{data.rw3.place}</p>
                    </div>
                </div>
                <div className="rw__item">
                    <div className="rw__item__row1">
                        <Link to="/real-weddings/rw4" className="rw__photo-box">
                            <div className="rw__photo13"></div>
                        </Link>
                    </div>
                    <div className="rw__item__row2">
                        <Link to="/real-weddings/rw4" className="rw__photo-box">
                            <div className="rw__photo14"></div>
                        </Link>
                        <Link to="/real-weddings/rw4" className="rw__photo-box">
                            <div className="rw__photo15"></div>
                        </Link>
                        <Link to="/real-weddings/rw4" className="rw__photo-box rw__photo-count">
                            <div className="rw__photo16"></div>
                            <div className="rw__photo-count__box">
                                <span>{data.rw4.totalImages}</span>
                                <span>photos</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <p className="rw__item__title">{data.rw4.name}</p>
                        <p className="rw__item__subtitle">{data.rw4.place}</p>
                    </div>
                </div>
            </div>
            <div className="rw__cta">
                <Link to="/real-weddings" className="btn btn-black">
                    view all &rarr;
                </Link>
            </div>
        </section>
    )
}

export default RealWeddings
