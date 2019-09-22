import React from 'react';
import './CountryCard.css';

function CountryCardView(props) {
    const { countryData, handleCountryClick } = props;

    const handleClick = (data) => {
        handleCountryClick(data)
    }

    let name,
        population,
        region,
        capital,
        flag;

    if (countryData) {
        ({ name, population, region, capital, flag } = countryData);
    }
    return (
        <div className="country-card" onClick={() => handleClick(countryData)}>
            <picture className="country-card-picture" style={{ backgroundImage: `url(${flag})`}}>
                {/* <img alt="country" src={`${flag}`}/> */}
            </picture>
            <div className="country-card-info">
                <h3 className="country-card-info-name">{name}</h3>
                <p className="country-card-info-population"><b>Population</b>: {population} </p>
                <p className="country-card-info-region"><b>Region</b>: {region}</p>
                <p className="country-card-info-capital"><b>Capital</b>: {capital} </p>
            </div>
        </div>
    )
}


export default CountryCardView;