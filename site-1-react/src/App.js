import React from "react"
import HomeCta from "./components/HomeCta"
import Blog from "./components/Blog"
import Search from "./components/Search"
import VenueTypes from "./components/VenueTypes"
import Vendors from "./components/Vendors"
import RealWeddings from "./components/RealWeddings"
import Testimonials from "./components/Testimonials"
import HeaderCarousel from "./components/HeaderCarousel"

function App() {
    return (
        <>
            <HeaderCarousel />
            <HomeCta />
            <Blog />
            <Search />
            <VenueTypes />
            <Vendors />
            <RealWeddings />
            <Testimonials />
        </>
    )
}

export default App
