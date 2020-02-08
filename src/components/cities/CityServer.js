import React, { Component } from 'react';
import serverFunctions from './serverFunction.js'

class CityServer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: this.props.city,
            updatePopInput: "",
            details: "",
            classification: "",
            hemisphere: "",
            popMessage: ""
        }
    }
    componentDidMount = () => {
        this.calcCityInfo();
    }
    handleInputChange = event => {
        this.setState({
            updatePopInput: event.target.value
        });
    }
    handleMovedIn = async () => {
        const updatePop = this.state.updatePopInput;
        if (updatePop) {
            this.state.city.movedIn(updatePop);
            const errorMessage = await serverFunctions.updateData(this.state.city);
            if (errorMessage) {
                this.props.showFetchMessage(errorMessage);
                this.state.city.movedOut(updatePop);
            } else {
                this.setState({
                    popMessage: `${updatePop} moved into ${this.state.city.name}`,
                    updatePopInput: ""
                });
                this.calcCityInfo();
                this.props.calcReport();
            }
        }
    }
    handleMovedIn = async () => {
        const updatePop = this.state.updatePopInput;
        if (updatePop) {
            this.state.city.movedIn(updatePop);
            const errorMessage = await serverFunctions.updateData(this.state.city);
            if (errorMessage) {
                this.props.showFetchMessage(errorMessage);
                this.state.city.movedOut(updatePop);
            } else {
                this.setState({
                    popMessage: `${updatePop} moved into ${this.state.city.name}`,
                    updatePopInput: ""
                });
                this.calcCityInfo();
                this.props.calcReport();
            }
        }
    }
    handleDelete = () => {
        this.props.removeCity(this.state.city.key)
    }
    calcCityInfo = () => {
        const detailsUpdate = this.state.city.show();
        const classificationUpdate = this.state.city.howBig();
        const hemisphereUpdate = this.state.city.whichSphere();

        this.setState({
            details: detailsUpdate,
            classification: classificationUpdate,
            hemisphere: hemisphereUpdate
        });
    }
    render() {
        return (
            <div id="idCityTools">
                <p style={{ whiteSpace: "pre-wrap" }}>{this.state.details}</p><br />
                <span>Classification: </span><span>{this.state.classification}</span><br />
                <span>Hemisphere: </span><span>{this.state.hemisphere}</span><br />

                <label>Pop Change:
                  <input id="idPopChange" type="number" value={this.state.updatePopInput} onChange={this.handleInputChange} min="0" />
                </label>
                <button type='button' id="idMovedIn" onClick={this.handleMovedIn}>Moved In</button>
                <button type='button' id="idMovedOut" onClick={this.handleMovedOut}>Moved Out</button><br />
                <button type='button' id="idDelete" onClick={this.handleDelete}>Delete City</button><br />
                <span id="idCityMessage">{this.state.popMessage}</span>
            </div>
        );
    }
}


export default CityServer;



