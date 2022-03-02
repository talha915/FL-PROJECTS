class Vehicle {
    honk(): void {
        console.log("Beep");
    }

    horn(): string {
        return "BEEP BEEP";
    }
}

class Car extends Vehicle {
    private drive(): void {
        console.log("Hello Let's drive and chat");
    }
    checkDrive(): void {
        this.drive();
    }
}

const car = new Car();
car.checkDrive();
car.honk();
const hornMethod = car.horn();
console.log(hornMethod);