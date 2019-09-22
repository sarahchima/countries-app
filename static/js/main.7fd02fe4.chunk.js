(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){e.exports=t(30)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(2),l=t.n(c),o=(t(20),t(3)),i=t(4),u=t(7),s=t(5),m=t(1),d=t(6);t(21),t(22);var h=function(e){var a,t,n,c,l,o=e.countryData,i=e.handleCountryClick;return o&&(a=o.name,t=o.population,n=o.region,c=o.capital,l=o.flag),r.a.createElement("div",{className:"country-card",onClick:function(){i(o)}},r.a.createElement("picture",{className:"country-card-picture",style:{backgroundImage:"url(".concat(l,")")}}),r.a.createElement("div",{className:"country-card-info"},r.a.createElement("h3",{className:"country-card-info-name"},a),r.a.createElement("p",{className:"country-card-info-population"},r.a.createElement("b",null,"Population"),": ",t," "),r.a.createElement("p",{className:"country-card-info-region"},r.a.createElement("b",null,"Region"),": ",n),r.a.createElement("p",{className:"country-card-info-capital"},r.a.createElement("b",null,"Capital"),": ",c," ")))},p=function(e){var a=e.countryData,t=e.handleCountryClick;return r.a.createElement(h,{countryData:a,handleCountryClick:t})},v=(t(23),function(e){console.log(e);var a=e.countriesData,t=e.handleCountryClick;return a&&0!==a.length?r.a.createElement("div",{className:"home-page-main"},r.a.createElement("div",{className:"country-card-container"},a.map(function(e){return r.a.createElement(p,{key:e.name,countryData:e,handleCountryClick:t})}))):r.a.createElement("div",{className:"home-page-main"}," There are no countries")});var E=function(e){var a=e.handleSearchFilter;return r.a.createElement("div",{className:"search-field"},r.a.createElement("span",{role:"img","aria-label":"search-icon"},"\ud83d\udd0d"),r.a.createElement("input",{placeholder:"Search for a country",onChange:function(e){var t=e.target.value;a(t,"searchFilter")}}))},y=t(14);var b=function(e){return r.a.createElement("div",{className:"dropdown-container"},r.a.createElement(y.a,{className:"dropdown",options:[{value:"africa",label:"Africa"},{value:"Asia",label:"Asia"},{value:"America",label:"America"},{value:"Europe",label:"Europe"},{value:"Oceania",label:"Oceania"}],onChange:function(a){e.handleSearchFilter(a.value)},placeholder:"Filter by Region"}))},k=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(s.a)(a).call(this,e))).state={allCountriesData:[],countriesData:[]},t.handleSearchFilter=t.handleSearchFilter.bind(Object(m.a)(t)),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://restcountries.eu/rest/v2/all").then(function(e){return e.json()}).then(function(a){e.setState({allCountriesData:a,countriesData:a}),e.props.updateCountriesData(a)}).catch(function(e){})}},{key:"handleSearchFilter",value:function(e,a){var t=new RegExp(e,"gi"),n=this.state.allCountriesData.filter(function(e){return"searchFilter"===a?e.name.match(t):e.region.match(t)});this.setState({countriesData:n})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"filter-container"},r.a.createElement(E,{handleSearchFilter:this.handleSearchFilter}),r.a.createElement(b,{handleSearchFilter:this.handleSearchFilter})),r.a.createElement(v,{countriesData:this.state.countriesData,handleCountryClick:this.props.handleCountryClick}))}}]),a}(r.a.Component);var f=function(e){var a=e.countryData,t=a.flag,n=a.name,c=a.nativeName,l=a.population,o=a.region,i=a.subregion,u=a.capital,s=a.topLevelDomain,m=e.extractNamesFromArray,d=e.getBorderCountriesNames,h=m(e.countryData.currencies,!0),p=m(e.countryData.languages,!0),v=d(e.countryData.borders).map(function(e){return r.a.createElement("span",{className:"border-country"},e)});return console.log(v),r.a.createElement("div",{className:"container"},r.a.createElement("picture",{className:"country-image"},r.a.createElement("img",{alt:"",src:t})),r.a.createElement("div",{className:"country-details"},r.a.createElement("h1",null,n),r.a.createElement("div",{className:""},r.a.createElement("div",{className:"country-info"},r.a.createElement("p",null,r.a.createElement("b",null,"Native Name: "),c),r.a.createElement("p",null,r.a.createElement("b",null,"Population: "),l),r.a.createElement("p",null,r.a.createElement("b",null,"Region: "),o),r.a.createElement("p",null,r.a.createElement("b",null,"Sub Region: "),i),r.a.createElement("p",null,r.a.createElement("b",null,"Capital: "),u)),r.a.createElement("div",{className:"country-info"},r.a.createElement("p",null,r.a.createElement("b",null,"Top Level Domain: "),s),r.a.createElement("p",null,r.a.createElement("b",null,"Currencies: "),h," "),r.a.createElement("p",null,r.a.createElement("b",null,"Languages: ")," ",p," "))),r.a.createElement("div",{className:"border-countries"},r.a.createElement("p",null,r.a.createElement("b",null,"Border Countries: ")),r.a.createElement("div",null,v))))},C=(t(28),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(s.a)(a).call(this,e))).extractNamesFromArray=t.extractNamesFromArray.bind(Object(m.a)(t)),t.getBorderCountriesNames=t.getBorderCountriesNames.bind(Object(m.a)(t)),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"extractNamesFromArray",value:function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.map(function(t){return a&&t!==e[e.length-1]?"".concat(t.name,", "):"".concat(t.name)})}},{key:"getBorderCountriesNames",value:function(e){var a=this.props.countriesData.filter(function(a){return e.includes(a.alpha3Code)});return this.extractNamesFromArray(a)}},{key:"render",value:function(){var e=this.props.handleBackButtonClick;return r.a.createElement("div",null,r.a.createElement("div",{className:"back-button-container"},r.a.createElement("button",{onClick:e,className:"back-button"},"\u2190 Back")),r.a.createElement(f,{countryData:this.props.countryData,extractNamesFromArray:this.extractNamesFromArray,getBorderCountriesNames:this.getBorderCountriesNames}))}}]),a}(n.Component));var D=function(e){return r.a.createElement("button",{className:"toggle",onClick:function(){e.updateDarkMode()}},r.a.createElement("span",null,"\u263e"),e.isDarkMode?"Light Mode":"Dark Mode")},g=(t(29),function(e){return r.a.createElement("div",{className:"navbar-container"},r.a.createElement("nav",{className:"navbar"},r.a.createElement("h1",{className:"navbar-header"},"Where in the world?"),r.a.createElement("div",null,r.a.createElement(D,{updateDarkMode:e.updateDarkMode,isDarkMode:e.isDarkMode}))))}),N=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(s.a)(a).call(this,e))).state={isCountryPage:!1,countryPageData:[],countriesData:[],isDarkMode:!1},t.handleCountryClick=t.handleCountryClick.bind(Object(m.a)(t)),t.updateCountriesData=t.updateCountriesData.bind(Object(m.a)(t)),t.handleBackButtonClick=t.handleBackButtonClick.bind(Object(m.a)(t)),t.updateDarkMode=t.updateDarkMode.bind(Object(m.a)(t)),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"handleCountryClick",value:function(e){this.setState({isCountryPage:!0,countryPageData:e})}},{key:"handleBackButtonClick",value:function(){this.setState({isCountryPage:!1})}},{key:"updateCountriesData",value:function(e){this.setState({countriesData:e})}},{key:"updateDarkMode",value:function(){this.setState({isDarkMode:!this.state.isDarkMode})}},{key:"render",value:function(){var e=this.state,a=e.isCountryPage,t=e.countryPageData,n=e.countriesData,c=e.isDarkMode;return r.a.createElement("div",{className:"body ".concat(c?"dark-mode":"")},r.a.createElement(g,{updateDarkMode:this.updateDarkMode,isDarkMode:c}),!a&&r.a.createElement(k,{handleCountryClick:this.handleCountryClick,updateCountriesData:this.updateCountriesData}),a&&r.a.createElement(C,{countryData:t,countriesData:n,handleBackButtonClick:this.handleBackButtonClick}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.7fd02fe4.chunk.js.map