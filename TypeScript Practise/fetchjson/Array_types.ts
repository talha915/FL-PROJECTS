export {};
const cars: string[] = ['ford', 'bmw', 'toyota', 'honda'];

//const myCars = cars;
const myCars = [...cars];

myCars.push('suzuki');

//myCars.pop();

console.log(`My Cars: ${myCars} and real cars: ${cars}`);

myCars.map((data: string, index: number): void=> {
    console.log(`Data: ${data} & index: ${index}`);
});

const newCars = myCars.map((data: string, index: number): string=> {
    return data.toUpperCase();
});

console.log("NEW CARS: ", newCars);