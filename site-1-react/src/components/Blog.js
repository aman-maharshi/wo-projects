import React from "react"

function Blog() {
    return (
        <section className="blog">
            <p className="blog__header">Our Blog</p>
            <div className="blog__section">
                <div className="blog__article">
                    <div className="blog__left">
                        <img src={require("../images/blog1.jpeg")} alt="" />
                    </div>
                    <div className="blog__right">
                        <div className="blog__title">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                        <div className="blog__desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis natus sit vitae laboriosam praesentium aliquam ea mollitia incidunt? Officia, aspernatur.</div>
                        <div className="blog__btn">
                            <a href="/">read more &rarr;</a>
                        </div>
                    </div>
                </div>
                <div className="blog__article">
                    <div className="blog__left">
                        <img src={require("../images/blog2.jpeg")} alt="" />
                    </div>
                    <div className="blog__right">
                        <div className="blog__title">Lorem ipsum dolor sit amet.</div>
                        <div className="blog__desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis natus sit vitae laboriosam praesentium aliquam ea mollitia incidunt? Officia, aspernatur.</div>
                        <div className="blog__btn">
                            <a href="/">read more &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog__section">
                <div className="blog__article">
                    <div className="blog__left">
                        <img src={require("../images/blog3.jpeg")} alt="" />
                    </div>
                    <div className="blog__right">
                        <div className="blog__title">Lorem ipsum dolor sit amet.</div>
                        <div className="blog__desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis natus sit vitae laboriosam praesentium aliquam ea mollitia incidunt? Officia, aspernatur.</div>
                        <div className="blog__btn">
                            <a href="/">read more &rarr;</a>
                        </div>
                    </div>
                </div>
                <div className="blog__article">
                    <div className="blog__left">
                        <img src={require("../images/blog4.jpeg")} alt="" />
                    </div>
                    <div className="blog__right">
                        <div className="blog__title">Lorem ipsum dolor sit amet.</div>
                        <div className="blog__desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis natus sit vitae laboriosam praesentium aliquam ea mollitia incidunt? Officia, aspernatur.</div>
                        <div className="blog__btn">
                            <a href="/">read more &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
