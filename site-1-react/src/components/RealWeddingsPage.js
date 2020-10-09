import React, { useEffect } from "react"
import styled from "styled-components"
import bannerImage from "../images/rw-banner.jpeg"
import RealWeddingsItem from "./RealWeddingsItem"
import { data } from "./RealWeddingsData"

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
/* 
    BANNER AREA
*/

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
/*
    OPTIONS AREA
*/

const Options = styled.div`
    display: flex;
    padding: 2rem 0;
    box-shadow: 0 8px 6px -6px lightgray;

    @media (max-width: 576px) {
        flex-direction: column;
        align-items: center;
        padding: 1rem 0;
    }
`
/*
const OptionsLocation = styled.div`
    text-transform: uppercase;
    font-weight: 500;
    color: #ababab;
    padding-left: 10rem;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        padding-left: 0;
    }

    .location-select {
        font-size: 14px;
        font-weight: bold;
        border: 1px solid lightgray;
        padding: 5px 10px;
        margin-left: 1rem;
        width: 300px;
        outline: none;

        @media (max-width: 768px) {
            width: auto;
        }

        &:hover {
            border-color: gray;
        }
    }
`
const OptionsSort = styled.div`
    margin-left: auto;
    text-transform: uppercase;
    color: #ababab;
    font-weight: 500;
    line-height: 1.5;
    font-size: 14px;

    @media (max-width: 768px) {
        padding-top: 5px;
    }

    @media (max-width: 576px) {
        margin-right: auto;
        margin-top: 10px;
    }

    .sort-link {
        text-decoration: none;
        color: #ababab;
        padding: 0 10px;
    }
    .sort-link.active {
        color: black;
    }
`
*/

const Gallery = styled.div`
    padding: 2rem 0;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    font-family: didot-regular, sans-serif;
    max-width: 1080px;
    margin: 0 auto;
`

function RealWeddingsPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Section>
            <MainContainer>
                <Banner>
                    <BannerText>
                        <BannerTextTitle>Beautiful Real Weddings</BannerTextTitle>
                        <BannerTextSubtitle>Lorem ipsum dolor sit amet, consectetur adipisicing.</BannerTextSubtitle>
                    </BannerText>
                </Banner>
                <Options>{/*
                    <OptionsLocation>
                        By Location:
                        <select name="location-select" className="location-select">
                            <option value="all">All Locations</option>
                        </select>
                    </OptionsLocation>
                    <OptionsSort>
                        Sort:
                        <a className="sort-link" href="/#">
                            Popular
                        </a>{" "}
                        |{" "}
                        <a className="sort-link active" href="/#">
                            Recent
                        </a>
                    </OptionsSort>
                    */}</Options>
                <Gallery>
                    <RealWeddingsItem image1={data.rw1.images.image1} image2={data.rw1.images.image2} image3={data.rw1.images.image3} image4={data.rw1.images.image4} count={data.rw1.totalImages} name={data.rw1.name} place={data.rw1.place} id={"rw1"} />

                    <RealWeddingsItem image1={data.rw2.images.image1} image2={data.rw2.images.image2} image3={data.rw2.images.image3} image4={data.rw2.images.image4} count={data.rw2.totalImages} name={data.rw2.name} place={data.rw2.place} id={"rw2"} />

                    <RealWeddingsItem image1={data.rw3.images.image1} image2={data.rw3.images.image2} image3={data.rw3.images.image3} image4={data.rw3.images.image4} count={data.rw3.totalImages} name={data.rw3.name} place={data.rw3.place} id={"rw3"} />

                    <RealWeddingsItem image1={data.rw4.images.image1} image2={data.rw4.images.image2} image3={data.rw4.images.image3} image4={data.rw4.images.image4} count={data.rw4.totalImages} name={data.rw4.name} place={data.rw4.place} id={"rw4"} />

                    <RealWeddingsItem image1={data.rw5.images.image1} image2={data.rw5.images.image2} image3={data.rw5.images.image3} image4={data.rw5.images.image4} count={data.rw5.totalImages} name={data.rw5.name} place={data.rw5.place} id={"rw5"} />

                    <RealWeddingsItem image1={data.rw6.images.image1} image2={data.rw6.images.image2} image3={data.rw6.images.image3} image4={data.rw6.images.image4} count={data.rw6.totalImages} name={data.rw6.name} place={data.rw6.place} id={"rw6"} />
                </Gallery>
            </MainContainer>
        </Section>
    )
}

export default RealWeddingsPage
