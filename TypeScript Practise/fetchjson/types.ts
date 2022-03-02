let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4 ,5];
let truths: Boolean[] = [true, false, false, true, true];

//Object literal
let point:{x:number, y: number} = {
    x: 10,
    y: 20
}

const logNumber:(i:number) =>void = (i:number)=> {
    console.log(i);
}