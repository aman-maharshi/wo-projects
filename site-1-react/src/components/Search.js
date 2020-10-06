import React from "react"

function Search() {
    return (
        <section className="search-section">
            <div className="search__field">
                <span>Find</span>
                <input type="text" placeholder="vendors" />
            </div>
            <div className="search__field">
                <span>Near</span>
                <input type="text" placeholder="city" />
            </div>
            <div className="search__btn">
                <button className="btn btn-yellow">Search</button>
            </div>
        </section>
    )
}

export default Search
