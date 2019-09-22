import React from 'react'
import HomePageView from './HomePage-view';
import SearchField from './SearchField';
import DropDown from './Dropdown';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allCountriesData: [],
            countriesData: []
        }
        this.handleSearchFilter = this.handleSearchFilter.bind(this)
    }

    componentDidMount() {
        const countriesUrl = "https://restcountries.eu/rest/v2/all";
        fetch(countriesUrl) 
            .then((response) => response.json())
            .then ((data) => {
                this.setState({
                    allCountriesData: data,
                    countriesData: data
                })

                this.props.updateCountriesData(data)
            })
            .catch(function(error) {

            }) 
        
    }

    handleSearchFilter(searchText, type) {
        const regex = new RegExp(searchText, 'gi');
        const allCountriesData = this.state.allCountriesData;
        const countriesData = allCountriesData.filter(country => {
            if (type === "searchFilter") {
                return country.name.match(regex)
            } else {
                return country.region.match(regex)
            }
        })

        this.setState({
            countriesData: countriesData
        })
    }

    render() {
        return (
            <div>
                <div className="filter-container">
                    <SearchField handleSearchFilter={this.handleSearchFilter}/>
                    <DropDown handleSearchFilter={this.handleSearchFilter}/>
                </div>
                <HomePageView countriesData={this.state.countriesData} handleCountryClick={this.props.handleCountryClick} />
            </div>
        )
    }
}

export default HomePage;