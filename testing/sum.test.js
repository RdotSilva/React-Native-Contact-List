const sum = require('./sum.js');

// Tests
console.assert(sum(1, 1) === 2, 'Error summing 1 and 1');
console.assert(sum(0, 0) === 0, 'Error summing 0 and 0');
console.assert(sum(20, 30) === 50, 'Error summing 20 and 30');
