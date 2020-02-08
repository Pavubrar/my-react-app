import * as React  from 'react';
import {CreateCityForm} from './CityForm';
function CityComponent(props) {
    
    return (
        <div id="idGridContainer">
            <div id="idSummaryPanel">
                <h2 className="subheading">Community Manager</h2>

                <CreateCityForm onSubmit={props.addCity} message={props.data.formMessage} /><br />

                <div id="idCityReport" className="hidden">
                    <h3>Report</h3>
                    <span>Total Population: </span><span>{props.data.totalPopulation}</span><br />
                    <span>Most Northern: </span><span>{props.data.mostNorthern}</span><br />
                    <span>Most Southern: </span><span>{props.data.mostSouthern}</span><br />
                </div>
            </div>

            <div id="idMapPanel">
                <h2 className="subheading2">Alberta Map</h2>

                <div>
                    <h3>City Tools</h3>
                    <h4 id="idSelectedCity">{props.data.selectedCity.name || "Select City"}</h4>

                    {props.renderTools()}

                </div>

                <div>
                    <span id="idFetchError">{props.data.fetchMessage}</span>

                    <div className="map bgimg">
                        <svg id="idSVG" width="330" height="550">
                            {props.renderPoints()}
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default CityComponent;