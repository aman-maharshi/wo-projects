import React from "react"
import styled from "styled-components"
import bannerImage from "../images/rw-banner.jpeg"
import RealWeddingsItem from "./RealWeddingsItem"
import { RwData } from "./RealWeddingsData"

console.log(RwData.rw1.images.image1)

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

const Gallery = styled.div`
    padding: 2rem 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    font-family: didot-regular, sans-serif;
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
                <Options>
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
                </Options>
                <Gallery>
                    <RealWeddingsItem image1={require("../images/rw-1.jpeg")} image2={require("../images/rw-2.jpeg")} image3={require("../images/rw-3.jpeg")} image4={require("../images/rw-4.jpeg")} count={26} name={"Title One"} place={"Lorem, ipsum"} />

                    <RealWeddingsItem image1={require("../images/rw-5.jpeg")} image2={require("../images/rw-6.jpeg")} image3={require("../images/rw-7.jpeg")} image4={require("../images/rw-8.jpeg")} count={18} name={"Title Two"} place={"Lorem, ipsum"} />

                    <RealWeddingsItem image1={require("../images/rw-9.jpeg")} image2={require("../images/rw-10.jpeg")} image3={require("../images/rw-11.jpeg")} image4={require("../images/rw-12.jpeg")} count={33} name={"Title Three"} place={"Lorem, ipsum"} />

                    <RealWeddingsItem image1={require("../images/rw-13.jpeg")} image2={require("../images/rw-14.jpeg")} image3={require("../images/rw-15.jpeg")} image4={require("../images/rw-16.jpeg")} count={12} name={"Title Four"} place={"Lorem, ipsum"} />
              
                    <RealWeddingsItem image1={require("../images/rw-1.jpeg")} image2={require("../images/rw-2.jpeg")} image3={require("../images/rw-3.jpeg")} image4={require("../images/rw-4.jpeg")} count={7} name={"Title One"} place={"Lorem, ipsum"} />

                    <RealWeddingsItem image1={require("../images/rw-5.jpeg")} image2={require("../images/rw-6.jpeg")} image3={require("../images/rw-7.jpeg")} image4={require("../images/rw-8.jpeg")} count={15} name={"Title Two"} place={"Lorem, ipsum"} />

                    <RealWeddingsItem image1={require("../images/rw-9.jpeg")} image2={require("../images/rw-10.jpeg")} image3={require("../images/rw-11.jpeg")} image4={require("../images/rw-12.jpeg")} count={9} name={"Title Three"} place={"Lorem, ipsum"} />

                    <RealWeddingsItem image1={require("../images/rw-13.jpeg")} image2={require("../images/rw-14.jpeg")} image3={require("../images/rw-15.jpeg")} image4={require("../images/rw-16.jpeg")} count={11} name={"Title Four"} place={"Lorem, ipsum"} />
                </Gallery>
            </MainContainer>
        </Section>
    )
}

export default RealWeddingsPage
