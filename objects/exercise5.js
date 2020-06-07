let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys = [];

for (let val in vehicle) {
  keys.push(val);
}

console.log(keys);
