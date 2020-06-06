let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];


for (let i = 0; i < groceryList.length;) {
  let item = groceryList.shift()
  console.log(item);
}

// while (groceryList.length > 0) {
//   let checkedItem = groceryList.shift();

//   console.log(checkedItem);
// }

// console.log(groceryList);