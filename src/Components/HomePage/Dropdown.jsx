import React from 'react';
import Select from "react-select";

function DropDown(props) {
    const options = [
        {
            value: "africa",
            label: "Africa"
        },
        {
            value: "Asia",
            label: "Asia"
        },
        {
            value: "America",
            label: "America"
        },
        {
            value: "Europe",
            label: "Europe"
        },
        {
            value: "Oceania",
            label: "Oceania"
        },

    ]

    function handleChange(selectedOption) {
        props.handleSearchFilter(selectedOption.value)
    }
        
    return (
        <div className="dropdown-container">
            <Select className="dropdown" options={options} onChange={handleChange} placeholder="Filter by Region"  />
        </div>
    )
}

export default DropDown