let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

const firstElement = energy.shift();

energy.push('geothermal');

console.log(firstElement);
console.log(energy);