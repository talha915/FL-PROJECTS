class Vehicle {
    drive(): void {
        console.log("Let's drive");
    }

    honk(): void {
        console.log("Beep");
    }

    horn(): string {
        return "BEEP BEEP";
    }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
const hornMethod = vehicle.horn();
console.log(hornMethod);