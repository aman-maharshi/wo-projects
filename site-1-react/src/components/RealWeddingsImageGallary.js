import React, { useState } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { data } from "./RealWeddingsData"

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
    }
`

const GallaryItemSmall = styled.div`
    border: 10px solid white;
    height: 300px;
    width: 300px;
    margin: 10px;

    img {
        width: 100%;
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
    const { image1, image2, image3, image4, image5, image6, image7 } = data[id].images

    const [showMoreImages, setShowMoreImages] = useState(false)

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

    return (
        <Section>
            <GallaryContainer>
                <GallaryItemLarge>
                    <a href="/#">
                        <img src={image1} alt="abc" />
                    </a>
                </GallaryItemLarge>
                <GallaryItemLarge>
                    <a href="/#">
                        <img src={image2} alt="asdf" />
                    </a>
                </GallaryItemLarge>
                <GallaryItemSmall>
                    <a href="/#">
                        <img src={image3} alt="abc" />
                    </a>
                </GallaryItemSmall>
                <GallaryItemSmall>
                    <div className="desc">
                        <p className="name">{data[id].name}</p>
                        <p className="place">{data[id].place}</p>
                    </div>
                </GallaryItemSmall>
                <GallaryItemSmall>
                    <a href="/#">
                        <img src={image4} alt="abc" />
                    </a>
                </GallaryItemSmall>
            </GallaryContainer>
            {showMoreImages ? <LoadMoreBtn onClick={handleLoadLess}>&#11014; Less Photos</LoadMoreBtn> : <LoadMoreBtn onClick={handleLoadMore}>&#11015; See More Photos</LoadMoreBtn>}

            {image7 ? (
                <NewGallaryContainer className="new-gallary-container">
                    <GallaryItemSmall>
                        <a href="/#">
                            <img src={image5} alt="abc" />
                        </a>
                    </GallaryItemSmall>
                    <GallaryItemSmall>
                        <a href="/#">
                            <img src={image6} alt="abc" />
                        </a>
                    </GallaryItemSmall>
                    <GallaryItemSmall>
                        <a href="/#">
                            <img src={image7} alt="abc" />
                        </a>
                    </GallaryItemSmall>
                </NewGallaryContainer>
            ) : (
                ""
            )}
        </Section>
    )
}

export default RealWeddingsImageGallary
