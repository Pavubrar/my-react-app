import React, { Component } from 'react';
import './CitiesApp.css';
//import { CreateCityForm } from "./CityForm.js";
import { Community } from './cities';
import serverFunctions from './serverFunction.js';
import CityServer from './CityServer.js';
import CityComponent from './CityComponent.js';
import CityPoint from './CityPoint';
import {ThemeContext} from '../themeContext/Context';

class CitiesApp extends Component {
    constructor() {
        super();
        this.state = {
            totalPopulation: "",
            mostNorthern: "",
            mostSouthern: "",
            formMessage: "",
            fetchMessage: "",
            selectedCity: ""
        }
        this.province = new Community([])
    }
    componentDidMount = async () => {
        const errorMessage = await serverFunctions.loadData(this.province);
        if (errorMessage) {
            this.showfetchMessage(errorMessage);
        } else if (this.province.cities.length < 1) {
            this.showfetchMessage("Warning: server database is empty.")
        } else {
            this.calcReport()
        }
    }
    addCity = async (inputs) => {
        const { nameInput, latInput, longInput, popInput } = inputs;
        console.log(nameInput);
        if (!nameInput) {
            this.setState({
                formMessage: "Please enter a city name."
            });
        } else {
            this.setState({
                formMessage: ""
            });
            const key = this.province.getHighestKey() + 1;
            console.log(key);
            const addCityMessage = this.province.addNewCity(key, nameInput,Number(longInput), Number(latInput), Number(popInput))

            this.setState({
                formMessage: addCityMessage
            });

            const errorMessage = await serverFunctions.addData(this.province.cities[this.province.cities.length - 1]);
            if (errorMessage) {
                this.province.removeCity(key);
                this.showfetchMessage(errorMessage);
            } else {
                this.calcReport();
            }
        }
    }
    deleteCity = async (key) => {
        const errorMessage = await serverFunctions.deleteData(key);
        if (errorMessage) {
            this.showfetchMessage(errorMessage);
        } else {
            this.province.deleteCity(key);
            this.setState({
                selectedCity: ""
            });
            this.calcReport();
        }
    }
    showfetchMessage = (message) => {
        this.setState({
            fetchMessage: message
        });
    }
    calcReport = () => {
        this.setState({
            totalPopulation: ""
        })
        if (this.province.cities.length > 1) {
            document.getElementById("idCityReport").classList.remove("hidden");

            const mostNorth = this.province.getMostNorthern();
            const mostSouth = this.province.getMostSouthern();

            const totalPopulationUpdate = this.province.getPopulation();
            const mostNorthernUpdate = `${mostNorth.name} at ${mostNorth.latitude} latitude`;
            const mostSouthernUpdate = `${mostSouth.name} at ${mostSouth.latitude} latitude`;

            this.setState({
                totalPopulation: totalPopulationUpdate,
                mostNorthern: mostNorthernUpdate,
                mostSouthern: mostSouthernUpdate
            });
        } else {
            document.getElementById("idCityReport").classList.add("hidden");
        }
    }
        onSelectPoint = (event) => {
            const selectedPointKey = Number(event.target.attributes.keyid.value);
            const newSelectedCity = this.province.getCity(selectedPointKey);
            this.setState({
                selectedCity: newSelectedCity
            });
        }
        renderPoints = () => {
            console.log(this.province);
            return this.province.cities.map(city => {
                return <CityPoint
                    key={city.key}
                    keyID={city.key}
                    city={city}
                    calcReport={this.calcReport}
                    removeCity={this.removeCity}
                    classNames={this.state.selectedCity.key === city.key ? "city-point city-selected" : "city-point"}
                    onClick={this.onSelectPoint} />
            })
        }
        renderTools = () => {
            if (this.state.selectedCity) {
                return <CityServer
                    key={this.state.selectedCity.key} //***When a key changes, React will create a new component instance
                    city={this.state.selectedCity}
                    calcReport={this.calcReport}
                    removeCity={this.removeCity}
                    showFetchMessage={this.showFetchMessage}
                />
            } else {
                return null;
            }
        }
    
    render(){
    return (
        <ThemeContext.Consumer>
        {(context) => {
            const{isThemeMode, light, dark} = context;
            const theme = isThemeMode? light : dark;
            return(

        < CityComponent  style ={{background: theme.ui, color: theme.syntax}}
        addCity={this.addCity}
        renderTools={this.renderTools}
        renderPoints={this.renderPoints}
        data ={this.state}/>
            )
        }}
        </ThemeContext.Consumer>
            
    
    )
}
}
export default CitiesApp;