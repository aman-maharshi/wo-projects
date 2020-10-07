import React from "react"
import styled from "styled-components"

const Section = styled.div`
    padding: 1rem 3rem 3rem 2rem;
    background: linen;
    font-family: "Roboto", sans-serif;
`
const Title = styled.p`
    border: 1px solid #333;
    border-right: none;
    border-left: none;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-family: didot-italic;
    margin: 1rem auto 2.5rem auto;
    width: 300px;
    text-align: center;
    padding-top: 10px;
`
const Row = styled.div`
    max-width: 1230px;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`
const Column = styled.div`
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    padding: 0 10px;
    @media (max-width: 768px) {
        margin-bottom: 1rem;
    }
`
const Review = styled.p`
    font-size: 14px;
    line-height: 1.5;
`
const Author = styled.p`
    font-weight: bold;
    margin-top: 0;
`

function Testimonials() {
    return (
        <Section>
            <Title>Meet Our Customers</Title>
            <Row>
                <Column>
                    <div className="testimonial-image1">
                        <img src={require("../images/testimonials1.png")} alt="Testimonial 1" />
                    </div>
                    <Review>Thank you for all your efforts! We came to you with a small budget and you gave us a wedding that was grand. We had our doubts about wedding planners but one meeting with you sent them flying away. Our wedding wouldn't have been possible without you.</Review>
                    <Author>Shashaank & Anastasia</Author>
                </Column>
                <Column>
                    <div className="testimonial-image2">
                        <img src={require("../images/testimonials2.png")} alt="Testimonial 2" />
                    </div>
                    <Review>I would like to take this opportunity to thank you and your team for organizing the most beautiful wedding for my son. Your dedication, skills and creativity were spectacular, talking to you was always a pleasure and nothing was ever any trouble. I cannot thank you enough and would highly recommend your valuable service and look forward to a relationship in the future.</Review>
                    <Author>Avni & Pawan</Author>
                </Column>
                <Column>
                    <div className="testimonial-image3">
                        <img src={require("../images/testimonials3.png")} alt="Testimonial 3" />
                    </div>
                    <Review>I wanted to thank you for helping me out for my wedding preparations. Being overseas it was tough to prepare, But Your page gave me the ideas to be implemented and plan out my Wedding smoothly.</Review>
                    <Author>Shivi & Janit</Author>
                </Column>
            </Row>
        </Section>
    )
}

export default Testimonials
