import React from 'react';

function CountryPageView(props) {
    const { countryData: { flag,
                name,
                nativeName,
                population,
                region,
                subregion,
                capital,
                topLevelDomain,
            },
            extractNamesFromArray, 
            getBorderCountriesNames
        } = props;

    const currencies = extractNamesFromArray(props.countryData.currencies, true)
    const languages = extractNamesFromArray(props.countryData.languages, true)
    const borderCountries = getBorderCountriesNames(props.countryData.borders)

    const borderCountriesMap =  borderCountries.map(country => 
         <span className="border-country">{country}</span>
    )

    console.log(borderCountriesMap)

    return (
        <div className="container">
            <picture className="country-image">
                <img alt="" src={flag}/>
            </picture>
            <div className="country-details">
                <h1>{name}</h1>
                <div className="">
                    <div className="country-info">
                        <p><b>Native Name: </b>{nativeName}</p>
                        <p><b>Population: </b>{population}</p>
                        <p><b>Region: </b>{region}</p>
                        <p><b>Sub Region: </b>{subregion}</p>
                        <p><b>Capital: </b>{capital}</p>
                    </div>
                    <div className="country-info">
                        <p><b>Top Level Domain: </b>{topLevelDomain}</p>
                        <p><b>Currencies: </b>{currencies} </p>
                        <p><b>Languages: </b> {languages} </p>
                    </div>
                </div>
                <div className="border-countries">
                    <p><b>Border Countries: </b></p>
                    <div>{ borderCountriesMap}</div>
                </div>

            </div>
        </div>
    )
}

export default CountryPageView;