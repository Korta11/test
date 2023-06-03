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

//3 Robota 1
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

//3 Robota 2
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

//3 Robota 4
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

//3 Robota 7
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
//   area: 60,
//   rooms: 3,
//   location: {
//     country: "Jamaica",
//     city: "Kingston",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// (apartment.location = "country"), "city";
// location.country = "Jamaica";
// location.city = "Kingston";
// console.log(apartment);

//3 Robota 9
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };
// console.log(credentials);

//3 Robota 10
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

//3 Robota 11
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }

//   // Change code above this line
// }

//3 Robota 12
// function countProps(object) {
//   let propCount = 0;
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

//3 Robota 13
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(values);

//3 Robota 14
// function countProps(object) {
//   let propCount = 0;
//   for (const key of Object.keys(object)) {
//     propCount++;
//   }

//   return propCount;
// }
// console.log(countProps({ name: "Mango", age: 2 }));

//3 Robota 15
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(keys);
// console.log(values);

//3 Robota 16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   for (const salari of Object.values(salaries)) {
//     totalSalary += salari;
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

//3 Robota 17
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);
// // console.log(hexColors);

//3 Robota 18
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products)
//     if (product.name === productName) return product.price;
//   return null;
// }

// console.log(getProductPrice("Droid"));

//3 Robota 19
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   const res = [];
//   products.forEach((item) => {
//     if (item.hasOwnProperty(propName)) {
//       res.push(item[propName]);
//     }
//   });
//   return res;
// }
// console.log(getAllPropValues("name"));

//3 Robota 20
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const item of products)
//     if (item.name === productName) return item.price * item.quantity;
//   return 0;
// }
// console.log(getProductPrice("Grip"));

//3 Robota 21
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

//3 Robota 22
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;

//3 Robota 23
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon,
// } = highTemperatures;
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(highYesterday);

//3 Robota 24
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors, rgbColors);

//3 Robota 25
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;
// console.log(forecast);

//3 Robota 26
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(
//   calculateMeanTemperature({
//     today: { low: 37, high: 40 },
//     tomorrow: { low: 33, high: 38 },
//   })
// );

//3 Robota 28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(bestScore, worstScore, allScores);

//3 Robota 29
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings.withPassword);

//3 Robota 30
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   let res = {category, priority, ...data, completed,};
//   return res;
//   // Change code above this line
// }
// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// );

//3 Robota 31
// function add(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }

// console.log(add(12, 4, 11, 48));

//3 Robota 32
// function addOverNum(num, ...args) {
//   let sum = 0;

//   for (let i = 0; i < args.length; i++) {
//     if (args[i] > num) {
//       sum += args[i];
//     }
//   }

//   return sum;
// }
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

//3 Robota 33
// function findMatches(allowedNumbers, ...args) {
//   const matches = []; // Don't change this line

//   for (let arg of args) {
//     if (allowedNumbers.includes(arg)) {
//       matches.push(arg);
//     }
//   }

//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

//3 Robota 34
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };

// console.log(bookShelf.removeBook("Red sunset"));

//3 Robota 35
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const index = this.books.indexOf(oldName);
//     if (index !== -1) {
//       this.books.splice(index, 1, newName);
//     }
//   },
// };

// console.log(bookShelf.updateBook("The last kingdom", "Dune"));

//3 Robota 36
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   }, // Change code above this line
// };
// console.log(atTheOldToad.getPotions());

//3 Robota 39
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     this.potions.splice(this.potions.indexOf(potionName), 1);
//   },
// };
//3 Robota 40
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     const index = this.potions.indexOf(oldName);
//     if (index !== -1) {
//       this.potions.splice(index, 1, newName);
//     }
//   },
// };
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

//3 Robota 41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     const potionNames = this.potions.map((potion) => potion.name);

//     if (potionNames.includes(newPotion.name)) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     this.potions = this.potions.filter((potion) => potion.name !== potionName);
//   },

//   updatePotionName(oldName, newName) {
//     const potion = this.potions.find((potion) => potion.name === oldName);

//     if (!potion) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     potion.name = newName;
//   },
// };

// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));

//4 Robota 1
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

//4 Robota 2
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage("Ultracheese", deliverPizza));

//4 Robota 3
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });

//4 Robota 4
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     return onError(
//       `There is no pizza with a name ${pizzaName} in the assortment.`
//     );
//   },
// };

// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

//4 Robota 5
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }

//   orderedItems.forEach(function callback() {});

//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

//4 Robota 6
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }
//   filteredNumbers.forEach(function callback() {});
//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

//4 Robota 7
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }
// commonElements.forEach(function callback() {});
//   return commonElements;
//   // Change code above this line
// }

//4 Robota 8
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// };
// console.log(calculateTotalPrice(5, 100));

//4 Robota 10
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4]));

//4 Robota 11
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3));

//4 Robota 12
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// };
// console.log(getCommonElements([1, 2, 3], [2, 4]));

//4 Robota 13
// function changeEven(numbers, value) {
//   const newArray = [];
//   numbers.forEach((element) => {
//     if (element % 2 === 0) {
//       element += value;
//     }
//     newArray.push(element);
//   });
//   return newArray;
// }
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

//4 Robota 14
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);

// console.log(planetsLengths);

//4 Robota 15
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map((books) => books.title);
// console.log(titles);

//4 Robota 16
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap((books) => books.genres);
// console.log(genres);

//4 Robota 17
// const getUserNames = (users) => users.map((user) => user.name);
// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//

// console.log(getUserNames(users));

//4 Robota 18
// const getUserEmails = (users) => users.map((users) => users.email);
// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
// ];

// console.log(getUserEmails(users));

//4 Robota 19
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter((numbers) => numbers % 2 === 0);
// const oddNumbers = numbers.filter((numbers) => numbers % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

//4 Robota 20
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap((books) => books.genres);
// const uniqueGenres = allGenres.filter(
//   (genres, index, array) => array.indexOf(genres) === index
// );

// console.log(allGenres);
// console.log(uniqueGenres);

//4 Robota 21
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter((books) => books.rating >= MIN_RATING);
// const booksByAuthor = books.filter((books) => books.author === AUTHOR);

//4 Robota 22
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(({ eyeColor }) => eyeColor === color);
// };

//4 Robota 23
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(({ age }) => age >= minAge && age <= maxAge);
// };

//4 Robota 24
// const getUsersWithFriend = (users, friendName) => {
//  return users.filter((user) => user.friends.includes(friendName));
// };

//4 Robota 25
// const getFriends = (users) => {
//   const allFriends = users.flatMap((user) => user.friends);
//   const uniqueFriends = [...new Set(allFriends)];
//   return uniqueFriends;
// };

//4 Robota 26
// const getActiveUsers = (users) => {
//   return users.filter((user) => user.isActive === true);
// };

//4 Robota 27
//  const getActiveUsers = (users) => {
//   return users.filter((user) => user.isActive === false);
// };

//4 Robota 28
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find(
//   (book) => book.title === "The Dream of a Ridiculous Man"
// );
// const bookByAuthor = books.find((book) => book.author === "Robert Sheckley");

//4 Robota 29
// const getUserWithEmail = (users, email) => {
//     return users.find(({ email: userEmail }) => userEmail === email);
// };

//4 Robota 30
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((el) => el % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((el) => el % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((el) => el % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((el) => el % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((el) => el % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((el) => el % 2 !== 0);
// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);

//4 Robota 31
// const isEveryUserActive = (users) => {
//   return users.every((user) => user.isActive);
// };

//4 Robota 32
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some((el) => el % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((el) => el % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((el) => el % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((el) => el % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((el) => el % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((el) => el % 2 !== 0);
// console.log(anyElementInFirstIsEven);
// console.log(anyElementInFirstIsOdd);
// console.log(anyElementInSecondIsEven);
// console.log(anyElementInSecondIsOdd);
// console.log(anyElementInThirdIsEven);
// console.log(anyElementInThirdIsOdd);

//4 Robota 33
// const isAnyUserActive = (users) => {
//   return users.some((user) => user.isActive);
// };

//4 Robota 34
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);

//4 Robota 35
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// }, 0);
// console.log(totalAveragePlaytimePerGame);

//4 Robota 36
// const calculateTotalBalance = (users) => {
//   return users.reduce((totalBalance, user) => {
//     return totalBalance + user.balance;
//   }, 0);
// };
// console.log(calculateTotalBalance(users));

//4 Robota 37
// const getTotalFriendCount = (users) => {
//   return users.reduce((totalFriends, user) => {
//     return (user.friends.length += totalFriends);
//   }, 0);
// };
// console.log(getTotalFriendCount(users));

//4 Robota 38
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line
// const ascendingReleaseDates = releaseDates.sort();
// const alphabeticalAuthors = [...authors].sort();
// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

//4 Robota 39
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line
// const ascendingReleaseDates = [...releaseDates].sort();
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

//4 Robota 40
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line
// const authorsInAlphabetOrder = [...authors].sort();
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

//4 Robota 41
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line
// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author)
// );
// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author)
// );
// const sortedByAscendingRating = [...books].sort(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating
// );
// const sortedByDescentingRating = [...books].sort(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating
// );
// console.log(sortedByDescentingRating);

//4 Robota 42
// const sortByAscendingBalance = (users) => {
//   return users.sort(
//     (firstUsers, secondUsers) => firstUsers.balance - secondUsers.balance
//   );
// };

//4 Robota 43
// const sortByDescendingFriendCount = (users) => {
//   return users.sort((a, b) => b.friends.length - a.friends.length);
// };
// console.log(sortByDescendingFriendCount(users));

//4 Robota 44
// const sortByName = (users) => {
//   return [...users].sort((a, b) => a.name.localeCompare(b.name));
// };
// console.log(sortByName(users));

//4 Robota 45
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line
// const names = [...books]
//   .sort((a, b) => a.author.localeCompare(b.author))
//   .filter((books) => books.rating >= MIN_BOOK_RATING)
//   .map((books) => books.author);
// console.log(names);

//4 Robota 46
// const getNamesSortedByFriendCount = (users) => {
//   const sortedUsers = [...users].sort(
//     (a, b) => a.friends.length - b.friends.length
//   );
//   const sortedNames = sortedUsers.map((user) => user.name);
//   return sortedNames;
// };
// console.log(getNamesSortedByFriendCount(users));

//4 Robota 47
// const getSortedFriends = (users) => {
//   const requestFriends = users
//     .flatMap((user) => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index);
//   return requestFriends.sort((a, b) => a.localeCompare(b));
// };
// console.log(getSortedFriends(users));

//4 Robota 48
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// const getTotalBalanceByGender = (users, gender) => {
//   return users.reduce(
//     (totalBalance, usr) => totalBalance + usr.balance * (usr.gender === gender),
//     0
//   );
// };

// console.log(getTotalBalanceByGender(users, "male"));

//5 Robota 1
