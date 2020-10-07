import React from "react"
import styled from "styled-components"
import bannerImage from "../images/rw-banner.jpeg"

const Section = styled.div`
    padding: 1rem 3rem;
    font-family: "Roboto", sans-serif;

    @media (max-width: 768px) {
        padding: 1rem 2rem;
    }

    @media (max-width: 576px) {
        padding: 1rem;
    }
`
const MainContainer = styled.div`
    max-width: 1230px;
    margin: 1rem auto;
`
const Banner = styled.div`
    height: 250px;
    width: 100%;
    background: linen url(${bannerImage}) no-repeat center;
    background-size: cover;
    position: relative;
`
const BannerText = styled.div`
    background: white;
    color: #8f898b;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 5px solid rgba(0, 0, 0, 0.3);
    border-opacity: 0.7;
    height: 125px;
    width: 700px;
    text-align: center;

    @media (max-width: 768px) {
        height: 100px;
        width: 500px;
    }

    @media (max-width: 576px) {
        height: 80px;
        width: 290px;
        border: none;
    }
`
const BannerTextTitle = styled.p`
    text-transform: uppercase;
    font-weight: 300;
    font-size: 2rem;
    margin-bottom: 0;
    letter-spacing: 3px;

    @media (max-width: 768px) {
        font-size: 1.4rem;
    }

    @media (max-width: 576px) {
        font-size: 1rem;
    }
`
const BannerTextSubtitle = styled.p`
    font-weight: 200;
    font-size: 0.9rem;
    margin-top: 2px;
    color: #bababa;
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
    @media (max-width: 576px) {
        font-size: 0.7rem;
    }
`

function RealWeddingsPage() {
    return (
        <Section>
            <MainContainer>
                <Banner>
                    <BannerText>
                        <BannerTextTitle>Beautiful Real Weddings</BannerTextTitle>
                        <BannerTextSubtitle>Lorem ipsum dolor sit amet, consectetur adipisicing.</BannerTextSubtitle>
                    </BannerText>
                </Banner>
            </MainContainer>
        </Section>
    )
}

export default RealWeddingsPage
