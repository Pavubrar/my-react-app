import {City} from './cities.js'
const url = 'http://localhost:5000/';

const serverFunctions = {

    async postData(url, data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST',     // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',       // no-cors, *cors, same-origin
            cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow',         // manual, *follow, error
            referrer: 'no-referrer',    // no-referrer, *client
            body: JSON.stringify(data)  // body data type must match "Content-Type" header
        });

        const json = await response.json();    // parses JSON response into native JavaScript objects
        json.status = response.status;
        json.statusText = response.statusText;
        return json;
    },
    async loadData(newCommunity){
        try{
            let data = await this.postData(url + 'all');
            newCommunity.cities = data.map(dataCity => new City (dataCity.key, dataCity.name, dataCity.longitude, dataCity.latitude,dataCity.population))
            console.log("Cities loaded: ")
            console.log(newCommunity.cities);
            return null;
        } catch(error){
            console.log(error);
            return " Error: Failed to load cities from server.";
        }
    },
    async addData(city){
        try {
            await this.postData(url + 'add', city);
            return null;
        } catch (error) {
            console.log(error);
            return "Error: Server not responding. Failed to add city.";
        }
    },
    async updateData(city) {
        try {
            await this.postData(url + 'update', city);
            return null;
        } catch (error) {
            console.log(error);
            return "Error: Server not responding. Failed to update city population.";
        }
    },

    async deleteData(key) {
        try {
            await this.postData(url + 'delete', { key });
            return null;
        } catch (error) {
            console.log(error);
            return "Error: Server not responding. Failed to delete city."
        }
    },
}

    export default serverFunctions;
