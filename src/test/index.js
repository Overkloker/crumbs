// import arr, {brands, languages} from './data.json'

// console.log(languages instanceof Array);
// console.log(languages);
// console.log(brands);
//
// console.log(...brands);

//
// var a = (...params) => {
//   let res=0;
//   for (let i = 0; i < arguments.length; i++) {
//     res += params[i]
//   }
//   console.log(res);
// };
//
// // a(...languages, ...brands)
// a(1, 2, 3);
//
// var noThis = function () {
//   console.log(this);
// };
//
// function yesThis() {
//   console.log(this);
// }
//
// noThis();
// yesThis();
//
// function func() {
//   console.log(this)
// }
//
// func();
//
//
//
// console.log('----------------------');
//
// var user = {
//   firstName: 'Paul',
//   lastName:'Shynkaruk'
// };
//
// var ob = function () {
//   user.push = [].push
//   user.j = [].join;
//   user.push('fff');
//   console.log(user);
// };
//
// ob();
//
// var arss = [];
// arss.push(1);
// arss.push(5);
// arss.push(2);
//
// console.log(Math.max(...arss));
//
//
// function sum(arr) {
//   return arr.reduce(function(a, b) {
//     return a + b;
//   });
// }
//
// console.log( sum([1, 2, 3, 4]) ); // 6 (=1+2+3)

// function sumArgs() {
//   var reduce = [].reduce;
//
//   var arg = reduce.call(arguments, function (a, b, i) {
//     return arguments[i] + b;
//   });
//   return arg
// };
//
// console.log( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива

function sumArgs() {
  var reduce = [].reduce;

  return reduce.call(arguments, function (a, b) {
    return a + b;
  });
};

console.log( sumArgs(1, 2, 3, 4, 5) ); // 6, аргументы переданы через запятую, без массива


console.log('-------');

//
// function q () {
//   var a =5;
//   return a
// }
// q()
// console.log(a);
// console.log(b);
//

function makeArmy() {

  let shooters = [];

  for (var i = 0; i < 10; i++) {
    shooters.push(function() {
      alert( i ); // выводит свой номер
    });
  }

  return shooters;
}

var army = makeArmy();

army[0](); // 0
army[5](); // 5

console.log(makeArmy());