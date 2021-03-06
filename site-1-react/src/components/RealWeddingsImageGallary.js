import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { data } from "./RealWeddingsData"
import { Link } from "react-router-dom"

import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

const Section = styled.section`
    padding: 1rem 3rem;
    background: #f3f3f3;
`
const GallaryContainer = styled.div`
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1230px;
    margin: 0 auto;
`
const GallaryItemLarge = styled.div`
    border: 10px solid white;
    height: 300px;
    width: 462px;
    margin: 10px;

    @media (max-width: 768px) {
        width: 300px;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;

        &:hover {
            opacity: 0.7;
        }
    }
`

const GallaryItemSmall = styled.div`
    border: 10px solid white;
    height: 300px;
    width: 300px;
    margin: 10px;

    img {
        width: 100%;

        &:hover {
            opacity: 0.7;
        }
    }

    .desc {
        background: white;
        height: 100%;
        text-align: center;
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .name {
            font-size: 1.5rem;
            margin-top: 0;
            margin-bottom: 10px;
        }
        .place {
            margin-top: 14px;
            color: gray;
            font-size: 13px;
            position: relative;
        }
    }
`
const LoadMoreBtn = styled.button`
    border: none;
    color: gray;
    cursor: pointer;
    display: block;
    margin: 10px auto;
    text-transform: uppercase;
    outline: none;
`

const NewGallaryContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1230px;
    margin: 0 auto;
`

function RealWeddingsImageGallary(props) {
    const { id } = useParams()
    const { image1, image2, image3, image4 } = data[id].images
    const allImages = Object.values(data[id].images)
    const hiddenImages = allImages.splice(4, allImages.length)
    const [showMoreImages, setShowMoreImages] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    function handleLoadMore() {
        if (document.querySelector(".new-gallary-container")) {
            document.querySelector(".new-gallary-container").classList.add("show-more-photos")
            setShowMoreImages(true)
        }
    }

    function handleLoadLess() {
        document.querySelector(".new-gallary-container").classList.remove("show-more-photos")
        setShowMoreImages(false)
    }

    /* LightBox Specific Variables and States */
    let LBImages = [image1, image2, image3, image4]
    const [photoIndex, setPhotoIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    if(showMoreImages) {
        LBImages = Object.values(data[id].images)
    }

    function handleImageClick(location) {
        setIsOpen(true)
        setPhotoIndex(location)
    }

    return (
        <Section>
            <GallaryContainer>
                <GallaryItemLarge>
                    <Link onClick={() => handleImageClick(0)} to={`/real-weddings/${id}`} replace>
                        <img src={image1} alt="abc" />
                    </Link>
                </GallaryItemLarge>
                <GallaryItemLarge>
                    <Link onClick={() => handleImageClick(1)} to={`/real-weddings/${id}`} replace>
                        <img src={image2} alt="asdf" />
                    </Link>
                </GallaryItemLarge>
                <GallaryItemSmall>
                    <Link onClick={() => handleImageClick(2)} to={`/real-weddings/${id}`} replace>
                        <img src={image3} alt="abc" />
                    </Link>
                </GallaryItemSmall>
                <GallaryItemSmall>
                    <div className="desc">
                        <p className="name">{data[id].name}</p>
                        <p className="place">{data[id].place}</p>
                    </div>
                </GallaryItemSmall>
                <GallaryItemSmall>
                    <Link onClick={() => handleImageClick(3)} to={`/real-weddings/${id}`} replace>
                        <img src={image4} alt="abc" />
                    </Link>
                </GallaryItemSmall>
            </GallaryContainer>

            {/* SHOW MORE PHOTOS or LESS PHOTOS BUTTON */}
            {showMoreImages ? 
                <LoadMoreBtn onClick={handleLoadLess}>&#11014; Less Photos</LoadMoreBtn> : 
                data[id].totalImages > 4 ? 
                <LoadMoreBtn onClick={handleLoadMore}>&#11015; See More Photos</LoadMoreBtn> : 
                ""}

            {/* SHOW REMAINING PHOTOS   */}
            {data[id].totalImages > 4 ? (
                <NewGallaryContainer className="new-gallary-container">
                    {hiddenImages.map((item, index) => {
                        return (
                            <GallaryItemSmall key={index}>
                                <Link onClick={() => handleImageClick(index + 4)}  to={`/real-weddings/${id}`} replace>
                                    <img src={item} alt={index} />
                                </Link>
                            </GallaryItemSmall>
                        )
                    })}
                </NewGallaryContainer>
            ) : (
                ""
            )}
            
            {/* PHOTOS LIGHTBOX */}
            {isOpen && 
                <Lightbox 
                    mainSrc={LBImages[photoIndex]} 
                    nextSrc={LBImages[(photoIndex + 1) % LBImages.length]} 
                    prevSrc={LBImages[(photoIndex + LBImages.length - 1) % LBImages.length]} 
                    onCloseRequest={() => setIsOpen(false)} 
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + LBImages.length - 1) % LBImages.length)} 
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % LBImages.length)} 
                />
            }
        </Section>
    )
}

export default RealWeddingsImageGallary
