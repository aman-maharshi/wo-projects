import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Section = styled.div`
    padding: 1rem 3rem;
`
const Title = styled.p`
    border: 1px solid #333;
    border-right: none;
    border-left: none;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-family: didot-italic;
    margin: 1rem auto 3rem auto;
    width: 250px;
    text-align: center;
    padding-top: 10px;
`
const BackLink = styled(Link)`
    font-family: "Roboto", sans-serif;
    color: black;
    display: block;
    text-align: center;
    font-size: 1.05rem;
    font-weight: 600;
    &:hover {
        color: #706c60;
    }
`

function NotFoundPage() {
    return (
        <Section>
            <Title>Page Not Found</Title>
            <BackLink to="/">&larr; Back to Home</BackLink>
        </Section>
    )
}

export default NotFoundPage
