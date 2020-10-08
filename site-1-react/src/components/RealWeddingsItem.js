import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

const PhotoItemLarge = styled.div`
    height: 200px;
    width: 100%;
    border-bottom: 1px solid white;
    transition: 0.3s ease;
    background: linen;

    img {
        width: 100%;
    }
`

const PhotoItemSmall = styled.div`
    height: 75px;
    width: 91.5px;
    border: 1px solid white;
    transition: 0.3s ease;
    background: linen;

    img {
        width: 100%;
    }

    .last-image {
        filter: brightness(60%);
    }
`

function RealWeddingsItem({ image1, image2, image3, image4, count, name, place, id }) {
    return (
        <div className="rw__item">
            <div className="rw__item__row1">
                <Link to={`/real-weddings/${id}`} className="rw__photo-box">
                    <PhotoItemLarge>
                        <img src={image1} alt={name} />
                    </PhotoItemLarge>
                </Link>
            </div>
            <div className="rw__item__row2">
                <a href="/real-weddings/rw-one" className="rw__photo-box">
                    <PhotoItemSmall>
                        <img src={image2} alt={name} />
                    </PhotoItemSmall>
                </a>
                <a href="#/real-weddings/rw-one" className="rw__photo-box">
                    <PhotoItemSmall>
                        <img src={image3} alt={name} />
                    </PhotoItemSmall>
                </a>
                <a href="/real-weddings/rw-one" className="rw__photo-box rw__photo-count">
                    <PhotoItemSmall>
                        <img src={image4} className="last-image" alt={name} />
                    </PhotoItemSmall>
                    <div className="rw__photo-count__box">
                        <span>{count}</span>
                        <span>photos</span>
                    </div>
                </a>
            </div>
            <div>
                <p className="rw__item__title">{name}</p>
                <p className="rw__item__subtitle">{place}</p>
            </div>
        </div>
    )
}

export default RealWeddingsItem
