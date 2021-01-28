// Add new functions, variables here
function timUCLN(x) {
  let mangUCLN = [];
  let output = " ";
  for (let i = 2; i < x;) {
    if (x < 2) {
      output = 0;
    }
    else {
      if ( x % i == 0) {
        mangUCLN.push(i);
        x = x / 2;
      }
      else{
        i++;
        continue;
      }

    }

  }
  return output=mangUCLN.join(" ");
}

function main(input) {
  // Your code goes here
  // Using console.log to answer the question
  let temp = input.split(" ");
  x = parseInt(temp[0])
  console.log(timUCLN(x));
}
module.exports = main;