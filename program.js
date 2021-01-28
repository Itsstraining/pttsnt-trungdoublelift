// Add new functions, variables here
function timUCLN(x) {
  let mangUCLN = [];
  let output = " ";
  if (x == 0) {
    return output = "0";
  }
  else {
    for (let i = 0; i <= x; i++) {
      if (i >= 2 && x % i == 0) {
        mangUCLN.push(i);
        x = x / i;
      }
      else {
        continue;

      }

    }
    return output = mangUCLN.join(" ");
  }
}

function main(input) {
  // Your code goes here
  // Using console.log to answer the question
  let temp = input.split(" ");
  x = parseInt(temp[0])
  console.log(timUCLN(x));
}
module.exports = main;