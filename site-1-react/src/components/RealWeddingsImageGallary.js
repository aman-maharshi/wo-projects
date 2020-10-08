import React from "react"
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

function RealWeddingsImageGallary(props) {
    const { id } = useParams()
    const { image1, image2, image3, image4 } = data[id].images

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
            
        </Section>
    )
}

export default RealWeddingsImageGallary
