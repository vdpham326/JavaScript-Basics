function catAge(year) {
  let age = 0;
  if (year === 1){
    age = 15;
  } else if (year === 2) {
    age = 24;
  } else {
    age = 24 + (4* (year - 2));
  }

  console.log(age);
}

catAge(1);
catAge(2);
catAge(3);
catAge(4);