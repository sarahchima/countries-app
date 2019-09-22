import React from 'react';
import CountryCardView from './CountryCard-view'

const CountryCard = (props) => {
    const { countryData, handleCountryClick } = props;
    return (
        <CountryCardView countryData={countryData} handleCountryClick={handleCountryClick}/>
    )
}

export default CountryCard;