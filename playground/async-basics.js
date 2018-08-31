console.log('Starting App');

setTimeout(() => {
    console.log('Inside of the callback');
}, 3000);

console.log('I am inbetween console log');

setTimeout(() => {
    console.log('I am second callback');
}, 0);


console.log('Finishing up');