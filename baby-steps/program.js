const numbers = process.argv.slice(2, process.argv.length);

const sum = numbers.reduce((acumulator, currentValue) => Number(acumulator) + Number(currentValue));

console.log(sum);
