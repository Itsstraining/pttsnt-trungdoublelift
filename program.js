// Add new functions, variables here
function timUCLN(x) {
  let mangUCLN = [];
  let output = " ";
  for (let i = 2; i < x; i++) {
    if (x % i == 0) {
      if (i == 2 || i % 2 != 0) {
        mangUCLN.push(i);
      }
      
    }

  }
  output=mangUCLN.join(" ");
  console.log(output);
}
function main(input) {
  // Your code goes here
  // Using console.log to answer the question
  let temp = input.split(" ");
  x = parseInt(temp[0])
  timUCLN(x);
}

module.exports = main;

//   // Add new functions, variables here

// function KtSNT(x) {
//   let flag = true;
//   if (x < 2) {
//     flag = false;
//   } else {
//     for (let i = 2; i < x; i++) {
//       if (x % i == 0) {
//         flag = false;
//         break;
//       }
//     }
//   }

//   return flag;
// }
// function Tach(x) {
//   let kq = "";
//   let n = x;
//   let temp = [];
//   while (!KtSNT(n)) {
//     for (let i = 0; i < n; i++) {
//       if (KtSNT(i) && n % i == 0) {
//         temp.push(i);
//         n = n / i;
//         break;
//       }
//     }
//   }
//   temp.push(n);

//   for (let k = 0; k < x; k++) {
//     for (let j = 0; j < temp.length; j++) {
//       if (j == 0) {
//         kq = kq + temp[j];
//       } else {
//         kq = kq + " " + temp[j];
//       }
//     }
//   return kq;
// }

// // for (let i = 0; i < temp.length; i++) {
// //   if (temp[i] * temp[i + 1] != x) {
// //     for (let i = 2; i < x - 1; i++) {
// //       if (x % i == 0) {
// //         x = x / i;
// //         temp.push(i);
// //       }
// //     }
// //   }
// // }

// // return kq;
// }
// function main(input) {
//   // Your code goes here
//   // Using console.log to answer the question
//   let x = parseInt(input);
//   if (x <= 2) {
//     console.log(0);
//   } else {
//   console.log(Tach(x));
//   }
// }

// module.exports = main;