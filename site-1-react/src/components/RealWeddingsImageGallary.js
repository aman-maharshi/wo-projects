import React from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { data } from "./RealWeddingsData"

const Section = styled.section`
    padding: 1rem 3rem;
    background: #f3f3f3;
`
const SectionTitle = styled.p`
    text-align: center;
    font-size: 1.5rem;
`
const GallaryContainer = styled.div`
    border: 1px solid gray;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap
`
const GallaryItem = styled.div`
    border: 10px solid white;
    height: 300px;
    width: 300px;

    img {
        width: 100%;
    }
`

function RealWeddingsImageGallary(props) {
    const { id } = useParams()
    const { image1 } = data[id].images
    
    return (
        <Section>
            <SectionTitle>Images Gallery</SectionTitle>
            <GallaryContainer>
                <GallaryItem><img src={image1} alt="abc" /></GallaryItem>
                <GallaryItem><img src={image1} alt="asdf" /></GallaryItem>
                <GallaryItem><img src={image1} alt="adsf" /></GallaryItem>
                <GallaryItem><img src={image1} alt="asdf" /></GallaryItem>
            </GallaryContainer>
        </Section>
    )
}

export default RealWeddingsImageGallary
