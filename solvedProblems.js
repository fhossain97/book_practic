//-----------------------------------------------------------------------------
// 1. Create a grades object that stores a set of student grades in an object. Provide a function for adding a grade and a function for displaying the student’s grade average.

// class Grade {
//   constructor(studentName, recentGrade) {
//     this.studentName = studentName;
//     this.recentGrade = recentGrade;
//   }
// }
// const grades = [];
// const handleGrades = (arr, gradeObj) => {
//   arr.push(gradeObj);
//   const averageGrade =
//     arr.reduce((acc, curr) => acc + curr.recentGrade, 0) / arr.length;
//   return { gradeAdded: grades, averageGrade: averageGrade };
// };
// const person = new Grade("farhana", 15);
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 2. Store a set of words in an array and display the contents both forward and backward.

// const arr = ["hello", "my", "name", "is", "farhana"];
// const displayWordsInDifferentOrders = (arr) => {
//   const forwards = arr;
//   const backwards = arr.slice(0, arr.length).reverse();
//   return { forwards: forwards, backwards: backwards };
// };
// console.log(displayWordsInDifferentOrders(arr));
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 3. Modify the weeklyTemps object in the chapter so that it stores a month’s worth of data using a two-dimensional array. Create functions to display the monthly aver‐ age, a specific week’s average, and all the weeks’ averages.

// const weeklyTemps = [[89, 77], [76, 82, 81], [91]];
// const handleWeeklyTemps = (arr) => {
//   let total = 0;
//   const weeklyMessage = [];
//   const mappedTemps = arr.map((temp, index) => {
//     let weeklySum = temp.reduce((acc, curr) => acc + curr, 0);
//     let length = temp.length;
//     total += weeklySum;
//     weeklyMessage.push({
//       message: `Week ${index + 1} average is ${(weeklySum / length).toFixed(
//         2
//       )}.`,
//     });
//   });
//   const totalAverage = total / arr.flat().length;
//   return {
//     total: total,
//     totalAverage: totalAverage.toFixed(2),
//     weeklyAvg: weeklyMessage,
//   };
// };
// console.log(handleWeeklyTemps(weeklyTemps));
//
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 4. Create an object that stores individual letters in an array and has a function for displaying the letters as a single word.

// const letters = ["f", "a", "r", "h", "a", "n", "a"];
// const consolidateLettersIntoWord = (arr) => {
//   return arr.join(",").replaceAll(",", "");
// };
// console.log(consolidateLettersIntoWord(letters));
//
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 5. Write a function that inserts an element into a list only if the element to be inserted is larger than any of the elements currently in the list. Larger can mean either greater than when working with numeric values, or further down in the alphabet, when working with textual values.

// const list = ["cv", "a", "ca", "b", "ab"];
// const list = [1, 2, 7, 68, 5, 900, 6];
// const insertElIntoList = (arr, el) => {
//   let sortedList;
//   if (typeof el === "number") {
//     sortedList = list.sort((a, b) => a - b);
//   } else if (typeof el === "string") {
//     sortedList = list.sort((a, b) => a.localeCompare(b));
//   }
//   const lastEl = sortedList[sortedList.length - 1];
//   if (el > lastEl) {
//     list.push(el);
//     return list;
//   } else {
//     console.log(`${el} is not larger than any element in the list.`);
//   }
// };
// console.log(insertElIntoList(list, "a"));
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 6. Write a function that inserts an element into a list only if the element to be inserted is smaller than any of the elements currently in the list.

// const list = ["cv", "y", "ca", "b", "ab"];
// const list = [3, 2, 7, 68, 5];
// const insertElIntoList = (arr, el) => {
//   let sortedList;
//   if (typeof el === "number") {
//     sortedList = list.sort((a, b) => a - b);
//   } else if (typeof el === "string") {
//     sortedList = list.sort((a, b) => a.localeCompare(b));
//   }
//   const firstEl = sortedList[0];
//   if (el < firstEl) {
//     list.push(el);
//     return list;
//   } else {
//     console.log(`${el} is not smaller than any element in the list.`);
//   }
// };
// console.log(insertElIntoList(list, "a"));
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 7. Create a Person class that stores a person’s name and their gender. Create a list of at least 10 Person objects. Write a function that displays all the people in the list of the same gender.

// const people = [
//   { name: "Farhana", gender: "female" },
//   { name: "Mushu", gender: "male" },
//   { name: "Meeshu", gender: "female" },
//   { name: "MoonMoon", gender: "female" },
//   { name: "Abir", gender: "male" },
// ];

// const sortByGender = (arr) => {
//   return arr.reduce(
//     (acc, curr) => {
//       acc[curr.gender].push(curr.name);
//       return acc;
//     },
//     { male: [], female: [] }
//   );
// };
// console.log(sortByGender(people));
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 8. Modify the video-rental kiosk program so that when a movie is checked out it is added to a list of rented movies. Display this list whenever a customer checks out a movie.

// const rentedMovies = [];
// const availableMovies = ["britneySpears", "beyonce", "bunny"];

// const updateMovieLists = (movieList, movieName) => {
//   const indexOfMovie = movieList.indexOf(movieName);
//   if (indexOfMovie !== -1) {
//     availableMovies.splice(indexOfMovie, 1);
//     rentedMovies.push(movieName);
//     return { availableMovies: availableMovies, rentedMovies: rentedMovies };
//   } else {
//     console.log(`Movie does not exist.`);
//   }
// };
// console.log(updateMovieLists(availableMovies, "bunny"));
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 9. Create a check-in function for the video-rental kiosk program so that a returned movies is deleted from the rented movies list and is added back to the available movies list.

// const rentedMovies = ["bunny", "bunocula"];
// const availableMovies = ["britneySpears", "beyonce"];

// const updateMovieLists = (movieList, movieName) => {
//   const indexOfMovie = movieList.indexOf(movieName);
//   if (indexOfMovie !== -1) {
//     rentedMovies.splice(indexOfMovie, 1);
//     availableMovies.push(movieName);
//     return { availableMovies: availableMovies, rentedMovies: rentedMovies };
//   } else {
//     console.log(`Movie does not exist.`);
//   }
// };
// console.log(updateMovieLists(rentedMovies, "bunny"));
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 10. A stack can be used to ensure that an arithmetic expression has balanced paren‐ theses. Write a function that takes an arithmetic expression as an argument and returns the position in the expression where a parenthesis is missing. An example of an arithmetic expression with unbalanced parentheses is 2.3 + 23 / 12 + (3.14159 * .24.

// const findPositionOfMissingParenthesis = (expression) => {
//   const stack = [];
//   console.log(expression.length);
//   let position;
//   for (let i = 0; i < expression.length; i++) {
//     if (expression[i] === "(") {
//       stack.push({ char: expression[i], position: i });
//     } else if (expression[i] === ")") {
//       if (stack.length === 0) {
//         console.log(`Mismatch at position ${i}`);
//       } else {
//         stack.pop();
//       }
//     }
//   }
//   while (stack.length > 0) {
//     position = stack.pop();
//   }
//   if (position) {
//     return `Mismatching at position ${position.position}`;
//   } else {
//     return "All parentheses match.";
//   }
// };

// console.log(findPositionOfMissingParenthesis("2.3 + 23 / 12 + (3.14159 * .24"));
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 11. A postfix expression evaluator works on arithmetic expressions taking the following form: op1 op2 operator
//Using two stacks—one for the operands and one for the operators—design and implement a JavaScript function that converts infix expressions to postfix expressions, and then use the stacks to evaluate the expression.

// const operators = [];
// const operands = [];

// const convertExpression = (expression) => {
//   let numString = "";
//   const extra = [];
//   for (let i = 0; i < expression.length; i++) {
//     if (
//       expression[i] === "+" ||
//       expression[i] === "-" ||
//       expression[i] === "/" ||
//       expression[i] === "*"
//     ) {
//       operators.push(expression[i]);
//       extra.push(numString);
//       numString = "";
//     } else {
//       numString += expression[i];
//     }
//   }
//   operands.push(numString);

//   while (operands.length > 0) {
//     extra.push(operands.pop());
//   }

//   const last = extra.pop();
//   const previous = extra.pop();

//   return { PostFixExpression: `${previous} ${last} ${operators.pop()}` };
// };

// console.log(convertExpression("100/25"));

//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 12. An example of a real-world stack is a Pez dispenser. Imagine that your virtual Pez dispenser is filled with red, yellow, and white colors and you don’t like the yellow ones. Write a program that uses a stack (and maybe more than one) to remove the yellow ones without changing the order of the other candies in the dispenser.

// const pez = ["yellow", "red", "white", "white", "yellow", "yellow"];
// const removeColor = (arr, color) => {
//   const firstStack = [];
//   for (let i = 0; i < arr.length; i++) {
//     firstStack.push(arr[i]);
//     if (arr[i] === color) {
//       firstStack.pop(arr[i]);
//     }
//   }
//   return firstStack;
// };
// console.log(removeColor(pez, "white"));
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 13. Modify the Queue class to create a Deque class. A deque is a queue-like structure that allows elements to be added and removed from both the front and the back of the list. Test your class in a program.

// const dequedArr = [1, 2, 3, 4, 5];

// const removeFromArrFront = dequedArr.shift();
// const removeFromArrBack = dequedArr.pop();
// const addToArrFront = dequedArr.splice(0, 0, 9);
// const addToArrBack = dequedArr.push(3);

// console.log(removeFromArrFront);
// console.log(removeFromArrBack);
// console.log(addToArrFront);
// console.log(addToArrBack);
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 14. Use the Deque class you created in Example 5-1 to determine if a given word is a palindrome.

// const palindrome = "bunny";
// const checkForPalindrome = (str) => {
//   const reversed = str.split("").reverse().join("");
//   if (reversed === str) {
//     return { message: `${str} is a palindrome.` };
//   }
//   return { message: `${str} is not a palindrome.` };
// };
// console.log(checkForPalindrome(palindrome));

//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 15. Modify the ED example (Example 5-5) so the user can control the activity in the ED. Create a menu system that allows the user to choose from the following activ‐ ities:
// a. Patient enters ED.
// b. Patient is seen by doctor.
// c. Display list of patients waiting to be seen.

// const userChoice = () => {
//   const activities = [
//     "patient enters ED",
//     "patient is seen by doctor",
//     "display list of patients waiting to be seen",
//   ];

//   const userInput = prompt(`Choose your activity: ${activities.join("\n")}`);
//   return { message: `You have chosen ${userInput}` };
// };

// userChoice();
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 16. Implement the advance(n) function so that when executed, the current node is moved n nodes forward in the list.
// class Node {
//     constructor(prev) {
//       this.prev = prev;
//       this.next = null;
//     }
//   }

//   class LinkedList {
//     constructor(head = null, tail = null, length = 0) {
//       this.head = head;
//       this.tail = tail;
//       this.length = length;
//     }
//   }
//   const node1 = new Node(1);
//   const node2 = new Node(2);
//   const node3 = new Node(3);
//   const list = new LinkedList(node1);

//   LinkedList.prototype.advance = function (n) {
//     let currentNode = this.head;
//     let count = 0;
//     while (currentNode.next !== null) {
//       currentNode = currentNode.next;
//       count += 1;
//       if (count === n) {
//         break;
//       }
//     }
//     return currentNode.value;
//   };
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 17. Implement the back(n) function so that when executed, the current node is moved n spaces backward in the list.
//   LinkedList.prototype.back = function (n) {
//     let currentNode = this.head;
//     let count = 0;
//     while (currentNode !== null) {
//       currentNode = currentNode.prev;
//       count += 1;
//       if (count === n) {
//         break;
//       }
//     }
//     return currentNode.value;
//   };
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 18. Implement the show() function, which displays the data associated with the current node.
//   LinkedList.prototype.show = function () {
//     let currentNode = this.head;
//     return { message: `Your current position is ${currentNode.value}` };
//   };
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 19. Write a program that uses a singly linked list to keep track of a set of test grades entered interactively into the program.
//   LinkedList.prototype.addGradeToSinglyLinkedList = function (grade) {
//     const newNode = new Node(grade);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//   };

//   LinkedList.prototype.showGradesForSinglyLinkedList = function () {
//     let currentNode = this.head;
//     let grades = [];

//     while (currentNode !== null) {
//       grades.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return { message: `All grades: ${grades.join(", ")}` };
//   };
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 20. Write a program that uses a doubly linked list to keep track of a set of test grades entered interactively into the program.
//   LinkedList.prototype.addGradeToDoublyLinkedList = function (grade) {
//     const newNode = new Node(grade);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.prev = this.tail;
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//   };

//   LinkedList.prototype.showGradesForDoublyLinkedList = function () {
//     let currentNode = this.head;
//     let grades = [];

//     while (currentNode !== null) {
//       grades.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return { message: `All grades: ${grades.join(", ")}` };
//   };
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 21. Write a program that allows you to place n people in a circle and specify that every mth person will be killed. The program should determine the number of the last two people left in the circle. Use a circularly linked list to solve the problem.
//   class CircularlyLinkedList extends LinkedList {
//     constructor(head = null, tail = null, length = 0) {
//       super(head, tail, length);
//     }
//   }

//   CircularlyLinkedList.prototype.remove = function (m) {
//     if (this.length < 2) {
//       console.log("Circle must have at least two people.");
//       return;
//     }
//     let current = this.head;
//     let previous = null;

//     while (current.next !== this.head) {
//       current = current.next;
//     }

//     while (this.length > 2) {
//       for (let i = 0; i < m - 1; i++) {
//         previous = current;
//         current = current.next;
//       }

//       previous.next = current.next;
//       current = current.next;
//       this.length--;
//     }

//     console.log("Remaining two people:", current.value, current.next.value);
//   };
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 22. Write a program that takes a set of names and phone numbers from a text file and stores them in a Dictionary object. Include in your program the ability to display one phone number, display all phone numbers, add new phone numbers, remove phone numbers, and clear out the list of numbers.

// const dictionary = { Farhana: 9293658413, Abir: 6464091692 };
// const displayOnePhoneNumber = (dictionary) => Object.values(dictionary)[0];
// const displayAllPhoneNumbers = (dictionary) => Object.values(dictionary);
// const addPhoneNumber = (dictionary, name, number) =>
//   (dictionary[name] = number);
// const removePhoneNumber = (dictionary, name) => delete dictionary[name];
// const clearPhoneNumbers = (dictionary) => {
//   for (const key of Object.keys(dictionary)) delete dictionary[key];
//   return dictionary;
// };
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 23. Using the Dictionary class, write a program that stores the number of occurrences of words in a text. Your program should display each word in a text just once as well as the number of times the word occurs in the text.
// const sentence = "the brown fox jumped over the blue fox";
// const arr = sentence.split(" ");
// const wordCount = arr.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
//   return acc;
// }, {});
// console.log(wordCount);
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 24. Rewrite exercise 2 so that it displays the words in sorted order.
// const sentence = "the brown fox jumped over the blue fox";
// const arr = sentence.split(" ");
// const wordCount = arr
//   .sort((a, b) => a.localeCompare(b))
//   .reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
//   }, {});
// console.log(wordCount);
//------------------------------------------------------------------------------
