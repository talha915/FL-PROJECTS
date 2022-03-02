export {};
const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 10,
        lng: 20
    }
}

const { age, name }: {age: number, name:string} = profile;
const {coords: {lat, lng}} : {coords: {lat: number, lng: number}} = profile;

console.log(`${name.toUpperCase()} is ${age} years old`);
console.log(`Latitude: ${lat} & Langitude: ${lng}`);