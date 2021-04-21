import React, { useState } from 'react';

const SearchBar = ({ input, updateInput }) => {

    const BarStyling = { width: "20rem", background: "#F2F1F9", border: "none", padding: "0.5rem" };

    return (
        <>
            <input
                style={BarStyling}
                key="random1"
                value={input}
                placeholder={"search by last name"}
                onChange={(e) => updateInput(e.target.value)}
            />
        </>
    );
}

export default SearchBar;