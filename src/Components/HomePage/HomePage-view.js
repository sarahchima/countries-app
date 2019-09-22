import React from 'react';
import { CountryCard } from './../CountryCard'
import './HomePage.css'

const HomePageView = (props) => {

    console.log(props)
    const { countriesData, handleCountryClick} = props;
    if( countriesData && countriesData.length !== 0) {
        return (
            <div className="home-page-main">
                <div className="country-card-container">
                    { countriesData.map ((countryData) => {
                        return (
                            <CountryCard key={countryData.name} countryData={countryData} handleCountryClick={handleCountryClick} />
                            )
                        } 
                    )}
                </div>
            </div>
        )
    } else {
        return (
            <div className="home-page-main"> There are no countries</div>
        )
    }

}

export default HomePageView;