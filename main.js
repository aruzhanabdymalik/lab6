// problem 1 (#2)

function findPerimeter(length, width) {
    return 2 * (length + width);
  }
  
  console.log(findPerimeter(2, 3)); // output: 10 
  console.log(findPerimeter(5, 4)); // output: 18
  
  
// problem 2 (#9)

function checkNumber(num) {
    if (num > 0) {
      return "Positive";
    } else if (num < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
}
  
  console.log(checkNumber(7)); // output: "Positive"
  console.log(checkNumber(-5)); // output: "Negative"
  console.log(checkNumber(0)); // output: "Zero"
  
// problem 3 (#13)

function maxOfTwo(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else if (num1 < num2) {
      return num2;
    }
    else {
      return "They are equal";

    }
  }
  
  console.log(maxOfTwo(10, 2)); // output: 10
  console.log(maxOfTwo(4, 9)); // output: 9
  console.log(maxOfTwo(5, 5)); // output: "They are equal"
  