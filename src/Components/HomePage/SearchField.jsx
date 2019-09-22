import React from 'react';

function SearchField (props) {
    const { handleSearchFilter } = props;

    function handleChange(e) {
        const value = e.target.value;
        handleSearchFilter(value, "searchFilter")
    }
    return (
        <div className="search-field">
            <span role="img" aria-label="search-icon">🔍</span>
            <input placeholder="Search for a country" onChange={handleChange} />    
        </div>
    )
}

export default SearchField;