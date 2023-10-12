<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:Correct answer is B: ReferenceError: greetign is not defined.

<i>There's a typo in the code where you have written greetign instead of greeting.
As a result, JavaScript does not recognize greetign as a defined variable, and it throws a ReferenceError.
The code execution stops at the point of the error, and the console.log(greetign); statement is not reached.
Therefore, you won't see any output, and you'll get a ReferenceError indicating that greetign is not defined.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:C: "12" 

<i>In the code, you have a function sum that takes two parameters a and b and returns their sum. When you call sum(1, "2"), JavaScript performs type coercion and converts the number 1 to a string and then concatenates it with the string "2". This results in the string "12" as the output of the sum function.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:The correct answer is A: ['🍕', '🍫', '🥑', '🍔'].

<i>The food array is initially defined with four elements: ["🍕", "🍫", "🥑", "🍔"].
The info object is created with a property favoriteFood that is assigned the value of food[0], which is "🍕".
Later, the info.favoriteFood property is reassigned to "🍝".
The reassignment of info.favoriteFood does not affect the original food array. So, when you log the food array, it remains the same, and the output is ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:  correct answer is B: Hi there, undefined.

<i>The sayHi function is defined to accept a name parameter.
When you call sayHi() without passing any argument, the name parameter inside the function will have the value undefined.
The function returns a string that includes the name variable, resulting in "Hi there, undefined".
Therefore, the console.log statement will output "Hi there, undefined".</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: correct answer is C: 3.

<i>Inside the callback function provided to forEach, you have the num parameter, which represents the current element being iterated.
Now, let's break down what happens in each iteration of the forEach loop:

For num = 0: The condition if (num) is checked. Since 0 is a falsy value in JavaScript, this condition evaluates to false, and no action is taken on count. count remains 0.

For num = 1: The condition if (num) is checked again. This time, num is 1, which is a truthy value. So, the code inside</i>

</p>
</details>
