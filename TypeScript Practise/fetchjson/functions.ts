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

const foreCast = {
    date: new Date(),
    weather: 'Sunny'
};

const checkWeather = (foreCast: {date: Date, weather: string}): void => {
    console.log(`Date is: ${foreCast.date} && Weather is: ${foreCast.weather}`);
}

checkWeather(foreCast);

//Another way of doing to above function
const logWeather = ({
    date, weather
    }: {
        date: Date, 
        weather: string
    }): void => {
        console.log("Another way of doing this: ");
        console.log(`Date is: ${date} && Weather is: ${weather}`);
}

logWeather(foreCast);