# Javascript-es_6-task
<h1>Questions:</h1>
<b>1) javascript For in loop</b>
<p>Write a JavaScript function named printObjectProperties that takes an object as an argument and uses the for...in loop to print all the properties and their values in the following format: "property: value". If the object is empty, print "Object is empty".

</p>

<b>2) javascript function returns</b>
<p>Write a JavaScript function named findMaxNumber that takes an array of numbers as an argument and returns the maximum number in the array. If the array is empty, the function should return null.


Example:


const numbers1 = [10, 20, 5, 30, 25];


console.log(findMaxNumber(numbers1)); // Output: 30


 


const numbers2 = [5, 15, 7];


console.log(findMaxNumber(numbers2)); // Output: 15


 


const emptyArray = [];


console.log(findMaxNumber(emptyArray)); // Output: null</p>

<b>3) javascript Spread Operator</b>
<p>Write a JavaScript function named mergeArrays that takes two arrays as arguments and returns a new array that merges both arrays using the spread operator.


Example:


const arr1 = [1, 2, 3];


const arr2 = [4, 5, 6];


 


console.log(mergeArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]

</p>

<b>4) javascript arrow function</b>
<p>Write a JavaScript arrow function named calculateSquare that takes a number as an argument and returns the square of that number.


Example:


console.log(calculateSquare(5)); // Output: 25


console.log(calculateSquare(8)); // Output: 64</p>

<b>5) javascript es6 map</b>
<p>Write a JavaScript function named doubleNumbers that takes an array of numbers as an argument and uses the ES6 map method to return a new array where each number is doubled.


Example:


const numbers = [1, 2, 3, 4, 5];


console.log(doubleNumbers(numbers)); // Output: [2, 4, 6, 8, 10]</p>

<b>6) javascript es6 static keyword</b>
<p>Create a JavaScript class named MathUtility with an ES6 static method called multiply. The multiply method should take two parameters and return their product.


Example:


console.log(MathUtility.multiply(5, 3)); // Output: 15


console.log(MathUtility.multiply(2, 8)); // Output: 16</p>

<b>7) javascript es6 class inheritance</b>
<p>Create a JavaScript class named Animal with a constructor that takes two parameters: name and sound. The class should have a method named makeSound that logs the sound of the animal.


 


Next, create a subclass of Animal named Dog. The Dog class should have an additional method named fetch that logs "Fetching the ball!".


Example:


const animal = new Animal("Lion", "Roar");


animal.makeSound(); // Output: "Roar"


 


const dog = new Dog("Buddy", "Woof");


dog.makeSound(); // Output: "Woof"


dog.fetch(); // Output: "Fetching the ball!"</p>

<b>8) javascript es6 super keyword</b>
<p>Create a JavaScript class named Person with a constructor that takes two parameters: name and age. The class should have a method named introduce that logs a greeting message including the person's name and age.


 


Next, create a subclass of Person named Student. The Student class should have an additional property named major and an overridden introduce method. The overridden introduce method should log a message that includes the person's name, age, and major.


Example:


const person1 = new Person("John", 30);


person1.introduce(); // Output: "Hello, my name is John and I am 30 years old."






const student1 = new Student("Alice", 20, "Computer Science");


student1.introduce(); // Output: "Hello, my name is Alice and I am 20 years old. I am majoring in Computer Science."</p>