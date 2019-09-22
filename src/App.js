import React, { Component } from 'react';
import './App.css';
import { HomePage } from './Components/HomePage';
import { CountryPage } from './Components/CountryPage';
import { Navbar } from './Components/Navbar';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isCountryPage: false,
			countryPageData: [],
			countriesData: [],
			isDarkMode: false
		}

		this.handleCountryClick = this.handleCountryClick.bind(this);
		this.updateCountriesData = this.updateCountriesData.bind(this);
		this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
		this.updateDarkMode = this.updateDarkMode.bind(this);
	}

	handleCountryClick(countryData) {
		this.setState({
			isCountryPage: true,
			countryPageData: countryData
		})
	}

	handleBackButtonClick() {
		this.setState({
			isCountryPage: false
		})
	}

	updateCountriesData(countriesData) {
		this.setState({
			countriesData: countriesData
		})
	}

	updateDarkMode() {
		this.setState({
			isDarkMode: !this.state.isDarkMode
		})
	}


  	render() {
		const { isCountryPage, countryPageData, countriesData, isDarkMode } = this.state;
		return (
			<div className={`body ${isDarkMode ? "dark-mode": ""}` }>
				<Navbar updateDarkMode={this.updateDarkMode} isDarkMode={isDarkMode}/>
				{ !isCountryPage && <HomePage handleCountryClick={this.handleCountryClick} updateCountriesData={this.updateCountriesData}/> }
				{ isCountryPage && <CountryPage countryData={countryPageData} countriesData={countriesData} handleBackButtonClick={this.handleBackButtonClick} />}
			</div>
		)
   }
}

export default App;
