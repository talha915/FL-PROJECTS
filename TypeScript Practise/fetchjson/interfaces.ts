const cars = {
    name: 'civic',
    model: '2002',
    broken: true
};

const printVehicles=({name, model, broken}: {name: string, model: string, broken: boolean}):void => {
    console.log(`This is ${name} car ${model} model and it is broken? ${broken}`);
}

printVehicles(cars);

// Replacing with interface

interface IVehicle {
    name: string,
    model: string,
    broken: boolean
};

const printVehicle=(vehicle: IVehicle)=> {
    console.log("Interfaces");
    console.log(`This is ${vehicle.name} car ${vehicle.model} model and it is broken? ${vehicle.broken}`);
}

printVehicle(cars);