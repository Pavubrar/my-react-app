class City {
    constructor(key, name, longitude, latitude, population){
    this.key = key;
    this.name =  name;
    this.longitude = longitude;
    this.latitude  = latitude;
    this.population = population;
}
showCity(){
return `Name: ${this.name}\nLongitude: ${this.longitude}\nLatitude: ${this.latitude}\nPopulation: ${this.population}`;
}
movedIn(num){
    return this.population += num;
}
movedOut(num){
    if((this.population - num) >= 0){
    this.population =  this.population - num;
    return this.population; 
    console.log(this.population  + " decrease ");
    }else
    return "Population can not be less than 0";
}

howBigCity(){
    if(this.population <= 100) return "Hamlet";
    if(this.population > 100 && this.population < 1000) return "Village";
    if(this.population > 1000 && this.population <= 20000) return "Town";
    if(this.population > 20000 && this.population <= 100000 ) return "Large Town";
    if(this.population >100000) return "City";

}
whichSphere(){
    if (this.latitude > 0) return "Northern Hemisphere";
    if(this.latitude <= 0) return "Southern Hemisphere";// if (city.lat > 0) return "Northern Hemisphere";
}       
}

class Community {
    constructor(){
        this.cities =[];
        
    }
    getCity(key) {
        return this.cities.filter(city => city.key === key)[0];
    }
    addNewCity(key, name, longitude, latitude, population){
        let message;
        console.log(this.cities);
        console.log(this.cities.filter((itm) => (itm.latitude === latitude && itm.longitude === longitude).length === 0));
        let result =this.cities.filter((itm) => (itm.latitude === latitude && itm.longitude === longitude));
        console.log(result);
        

        if(result.length === 0) {
            let NewCity = new City(key, name, longitude, latitude, population);
            this.cities.push(NewCity);
            message = `The new city has been added.Name: ${name}`;
        }else{
            message = "There is already a city with the same latitude and longitude. \nPlease edit your inputs";
        }
        return message;
    }
    getPopulation(){
        return this.cities.reduce((acc,itm) => itm.population + acc,0);
    }
    removeCity(key){
        //console.log(this.cities.length);
        this.cities = this.cities.filter((itm) => itm.key !== key);
       // console.log(this.cities.length);
    }
    getMostNorthern(){
        let northernSphere = this.cities[0].latitude;
        this.cities.forEach(element => {
            if(element.latitude > northernSphere){
                northernSphere = element.latitude
                console.log(northernSphere)
            }
            return northernSphere;
        })
        let mostNorthernCity = this.cities.filter(element => element.latitude ===northernSphere)[0]
        console.log(mostNorthernCity)
        return mostNorthernCity;
    }
    getMostSouthern(){
        let southernSphere = this.cities[0].longitude;
        this.cities.forEach(element => {
            if(element.longitude < southernSphere){
            southernSphere = element.longitude
            }
            return southernSphere;
        })
        let mostSouthernCity = this.cities.filter(element => element.longitude === southernSphere)[0];
        return mostSouthernCity;
    }
    getHighestKey() {
        if (this.cities.length > 0) return this.cities.sort((a, b) => b.key - a.key)[0].key;
        return 0;
    }

}
export {City, Community};