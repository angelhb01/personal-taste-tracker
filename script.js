console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.

let favoriteFoods = ['pizza', 'bread', 'shrimp', 'tacos', 'chicken', 'noodles'];


// 2. Loop through the list and print: "One of my favorite foods is ______."
console.log('2. Looping through the list:')
for (let i = 0; i < favoriteFoods.length; i++) {
  console.log('One of my favorite foods is ' + favoriteFoods[i])
}




// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.

console.log('3. Print out rating for each food:')
console.log('My #1 favorite food is tacos');
console.log('My #2 favorite food is noodles');
console.log('My #3 favorite food is shrimp');
console.log('My #4 favorite food is chicken');
console.log('My #5 favorite food is pizza');
console.log('My #6 favorite food is bread');



// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."

function printFoodRecommendation(foodName) {
  console.log('Have you ever tried ' + foodName);
  console.log('I always recommend ' + foodName + ' to friends.');
  console.log('Trust me - ' + foodName + ' is delicious');
}



// 4b. Call the function at least 3 times
console.log('4. Calling the printFoodRecommendation 3 times:')
printFoodRecommendation(favoriteFoods[3]);
printFoodRecommendation(favoriteFoods[favoriteFoods.length - 1]);
printFoodRecommendation(favoriteFoods[2]);


// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Pasta" would be.
let foodsWithA = [];

console.log('5. Foods with A:')
for (let i = 0; i < friendFavorites.length; i++) {
  if (friendFavorites[i].includes('a')) {
    foodsWithA.push(friendFavorites[i]);
    console.log(friendFavorites[i]);
  }
}


// 6. Store the result in an array called foodsWithA. Print out the array.
console.log("6. foodsWithA array:");
for (let i = 0; i < foodsWithA.length; i++) {
  console.log(foodsWithA[i]);
}



// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
longFoodNames = [];

console.log('7. Creating new longFoodNames for names longer than 6 characters:');
for (let i = 0; i < friendFavorites.length; i++) {
  if (friendFavorites[i].length > 6) {
    longFoodNames.push(friendFavorites[i]);
  }
}


// 8. Create another array shortFoodNames for foods 6 characters or shorter.
shortFoodNames = [];

console.log('8. Creating new shortFoodNames for names 6 characters or shorter:');
for (let i = 0; i < friendFavorites.length; i++) {
  if (friendFavorites[i].length <= 6) {
    shortFoodNames.push(friendFavorites[i]);
  }
}



// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."
console.log('9. Print both arrays and compare:');
console.log('Long names: ' + longFoodNames);
console.log('Short names: ' + shortFoodNames);
console.log('Number of long names: ' + longFoodNames.length);
console.log('Number of short names: ' + shortFoodNames.length);
console.log('There are more long names than short names')

// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
