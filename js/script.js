// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.
// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// const weight = "88,3";
// const height = "1.75";
// const formatWeight = Number(weight.replace(",", "."));
// const formatHeight = Number(height.replace(",", "."));
// console.log(formatWeight);
// console.log(formatHeight);
// const BMI = Number((formatWeight / Math.pow(formatHeight, 2)).toFixed(1));
// console.log(BMI);

//  Напишіть скрипт, який буде обрізати рядок до 25 символа і додавати у кінець три крапки.
// Працюй з наступними рядками попорядку:

// "Nunc sed turpis a felis in nunc fringilla"
// const str = "Vestibulum facilisis purus nec";
// console.log(str.length);
// console.log(str.slice(0, 24) + "...");

// Robota 2
// let productName = "Droid";
// let pricePerItem = 2000;
//  productName = "Repair droid";
//  pricePerItem = 3500;
// console.log(productName);
// console.log(pricePerItem);

// Robota 3
// let topSpeed = 160;
// let distance = 617.54;
// let login = "mango935";
// let isOnline = true;
// let isAdmin = false;

// Robota 4
// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

// Robota 5
// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `"You picked ${productName}, price per item is ${pricePerItem} credits"`;
// console.log(message);

// Robota 6
// let pricePerDroid = 800;
// let orderedQuantity = 6;
// let deliveryFee = 50;
// let totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// let message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(totalPrice);
// console.log(message);

// Robota 7
// function sayHi() {
//   console.log("Hello, this is my first function!");
// }
// sayHi();

// Robota 7
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// Robota 8
// function add(a, b, c) {
//   return a + b + c;
// }
// add(2, 5, 8); // 15
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// Robota 9
// function add(a, b, c) {
//   return a + b + c;
// }
// add(2, 5, 8); // 15
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// Robota 10
// function makeMessage (name, price) {
//   // Change code below this line
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// };

// Robota 11
// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;
//   // Change code above this line
//   return totalPrice;
// }

// Robota 12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const message = `You ordered droids worth ${
//     orderedQuantity * pricePerDroid + deliveryFee
//   } credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   // Change code above this line
//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));

// Robota 13
// function isAdult(age) {
//   Change code below this line
//   const passed = age >= 18;
//   // Change code above this line
//   return passed;
// }
// console.log(isAdult(37));

// Robota 14
// function isValidPassword(password) {
//   const SAVED_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

//   // Change code above this line
//   return isMatch;
// }
// console.log(isValidPassword("jqueryismyjam"));

// Robota 15
// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     // Change this line
//     message = "You are an adult";
//   } else {
//     message = "You are a minor";
//   }

//   return message;
// }
// console.log(checkAge(14));

// Robota 16
// function checkStorage(available, ordered) {
//   let message;

//   if (available > ordered) {
//     // Change this line
//     message = "Order is processed, our manager will contact you.";
//   } else {
//     message = "Not enough goods in stock!";
//   }

//   return message;
// }
// console.log(checkStorage(150, 180));

// Robota 17
// let a = 5;
// a += 2;
// let b = 10;
// b -= 4;
// let c = 15;
// c *= 3;
// let d = 20;
// d /= 10;

// console.log(d);

// Robota 18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   let totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice <= customerCredits) {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   } else {
//     message = "Insufficient funds!";
//   }
//   return message;
// }
// console.log(makeTransaction(500, 10, 5000));

// Robota 19
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;
//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;
//     default:
//       message = "Access denied, wrong password!";
//   }

//   return message;
// }
// console.log(checkPassword(null));
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("polyhax"));

// Robota 20
// function checkStorage(available, ordered) {
//   let message;
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (available >= ordered) {
//     message = "The order is accepted, our manager will contact you";
//   } else if (available < ordered) {
//     message = "Your order is too large, there are not enough items in stock!";
//   }
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// Robota 21
// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   constisNotInRange = !isInRange;

//   return isInRange;
// }

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

// Robota 22
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip";

//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent("free"));
// Robota 23
// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   constisNotInRange = !isInRange;

//   return isInRange;
// }

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

// Robota 24
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   if (totalSpent === 50000 || 50000 < totalSpent) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 || 50000 <= totalSpent) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 || 20000 == totalSpent) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent <= 5000) {
//     discount = BASE_DISCOUNT;
//   }
//   return discount;
// }
// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(500000));

// Robota 25
// function checkStorage(available, ordered) {
//   let message;
//   message =
//     available > ordered
//       ? "The order is accepted, our manager will contact you"
//       : "Not enough goods in stock!";
//   return message;
// }
// console.log(checkStorage(100, 130));

// Robota 26
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   message =
//     password === ADMIN_PASSWORD
//       ? "Access is allowed"
//       : "Access denied, wrong password!";
//   return message;
// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));

// Robota 27
// function getSubscriptionPrice(type) {
//   let price;

//   switch (
//     type // Change this line
//   ) {
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;
//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;
//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }
//   return price;
// }
// console.log(getSubscriptionPrice("starter"));

// Robota 28
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;
//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;
//     default:
//       message = "Access denied, wrong password!";
//   }

//   return message;
// }
// console.log(checkPassword(null));
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("polyhax"));

// Robota 29
// function getShippingCost(country) {
//   let message;
//   switch (country) {
//     case "China":
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Chile":
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Australia":
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Jamaica":
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   return message;
// }
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Germany"));

// Robota 30
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;

//   return message;
// }
// console.log(getNameLength("Harambe"));

// Robota 31
// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;

// const firstElement = courseTopic[0];

// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// Robota 32
// function getSubstring(string, length) {
//   const substring = string.slice(0, length);

//   return substring;
// }
// console.log(getSubstring("Hello world", 6));

// Robota 33
// function formatMessage(message, maxLength) {
//   let result;
//   result =
//     message.length <= maxLength ? message : `${message.slice(0, maxLength)}...`;
//   return result;
// }
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

// Robota 34
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }
// console.log(normalizeInput("Hello world"));

// Robota 35
// function checkForName(fullName, name) {
//   const result = fullName.includes(name);
//   return result;
// }

// console.log(checkForName("Egor Kolbasov", "Zhenya"));

// Robota 36
// function checkForSpam(message) {
//   let result;
//   const formatMessage = message.toLowerCase();
//   result = formatMessage.includes("sale") || formatMessage.includes("spam");
//   return result;
// }
// console.log(checkForSpam("JavaScript weekly newsletter"));

// 2 Robota 2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
// }
// console.log(checkPassword("fdsf"));

// 2 Robota 3
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
// }
// console.log(checkStorage(100, 50));

// 2 Robota 4
// fruits = ["apple", "plum", "pear", "orange"];

// 2 Robota 5
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];
// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// 2 Robota 6
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";

// 2 Robota 7
// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

// 2 Robota 8
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);

// 2 Robota 9
// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

// 2 Robota 10
// function splitMessage(message, delimiter) {
//   let words;
//   words = message.split(delimiter);

//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));

// 2 Robota 11
// function calculateEngravingPrice(message, pricePerWord) {
//   return message.split(" ").length * pricePerWord;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// 2 Robota 12
// function makeStringFromArray(array, delimiter) {
//   let string;
//   string = array.join(delimiter);
//   return string;
// }
// console.log(
//   makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
// );

// 2 Robota 13
// function slugify(title) {
//   return title.toLowerCase().replace(/ /g, "-");
// }
// console.log(slugify("Arrays for begginers"));

// function slugify(title) {
//   return title
//     .toLowerCase()
//     .replace(/ /g, "-")
//     .replace(/[^a-zA-Z0-9-]/g, "");
// }

//2 Robota 14
// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(2, 5);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

//2 Robota 15
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients);

// console.log(allClients);

//2 Robota 16
// function makeArray(firstArray, secondArray, maxLength) {
//   return firstArray.concat(secondArray).slice(0, maxLength);
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));

//2 Robota 17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

//2 Robota 18
// function calculateTotal(number) {
//   let sum = 0;

//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }

//   return sum;
// }
// console.log(calculateTotal(3));

//2 Robota 19
// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

//2 Robota 20
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

//2 Robota 21
// function findLongestWord(string) {
//   const stringSplit = string.split(" ");
//   let longestWord = "";

//   for (const word of stringSplit) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

//2 Robota 22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i++) numbers.push(i);
//   return numbers;
// }
// console.log(createArrayOfNumbers(29, 34));

//2 Robota 24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   fruit = fruits.includes(fruit);
//   return fruit; // Change this line
// }
// console.log(checkFruit("bffb"));

//2 Robota 25
// function getCommonElements(array1, array2) {
//   let result = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       result.push(array1[i]);
//     }
//   }
//   return result;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));

//2 Robota 26
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const item of order) {
//     total += item;
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

//2 Robota 27
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }
//   // Change code above this line

// console.log(filterArray([1, 2, 3, 4, 5], 3));

//2 Robota 28
// function getEvenNumbers(start, end) {
//   const evenNumbers = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   return evenNumbers;
// }
// // Change code above this line

//2 Robota 30
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

//2 Robota 31
// function findNumber(start, end, divisor) {
//   // Change code below this line

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }
//   }

//   // Change code above this line
// }
// console.log(findNumber(16, 35, 7));

//2 Robota 32

// function includes(array, value) {
//   for (let numb of array) {
//     if (numb === value) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(includes([1, 2, 3, 4, 5], 9));
