import Community from './cities'
import serverFunctions from './serverFunction'

describe('Class methods update on server using API CRUD functionality', ()=>{
    global.fetch = require('node-fetch');
    const url = 'http://localhost:5000/';
    const serverTestData =[
        { "key": 1, "name": "Calgary", "longitude": -114.05, "latitude": 51.05, "population": 1200000 },
        { "key": 2, "name": "Edmonton", "longitude": -113.49, "latitude": 53.55, "population": 1000000 },
        { "key": 3, "name": "Red Deer", "longitude": -113.81, "latitude": 52.28,"population": 100000 },
        { "key": 4, "name": "Lethbridge", "longitude": -112.8, "latitude": 49.7,"population": 93000 },
        { "key": 5, "name": "Peace River", "longitude": -117.23, "latitude": 56.23,"population": 7000 }
    ];
    test('loadData() loads server data into city list', async () =>{
        const newCommunity = new Community([]);
        await serverFunctions.postData(url + 'clear');
        await serverFunctions.postData(url + 'add', serverTestData[0]);
        await serverFunctions.postData(url + 'add', serverTestData[1]);
        await serverFunctions.postData(url + 'add', serverTestData[2]);
        await serverFunctions.postData(url + 'add', serverTestData[3]);
        await serverFunctions.postData(url + 'add', serverTestData[4]);

        let data = await serverFunctions.postData(url + 'all');
        expect(data.status).toEqual(200);
        expect(data.length).toBe(5);
        expect(newCommunity.cities.length).toEqual(0);
        expect(newCommunity.getHighestKey()).toEqual(0);

        await serverFunctions.loadData(newCommunity);

        expect(newCommunity.cities.length).toEqual(5);
        expect(newCommunity.cities[2]).toEqual(data[2]);
        expect(newCommunity.getHighestKey()).toEqual(5);
    });
})