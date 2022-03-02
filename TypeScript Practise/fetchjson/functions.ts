const sum = (a: number, b: number):number=> {
    return a+b;
}

const newSum = (a: number, b: number): void => {
    console.log(a+b);
}

const errorMessage = (message: string): never => {
    throw new Error(message);
}

const anotherError = (message: string): void => {
    if(!message) {
        throw new Error(message);
    }
}