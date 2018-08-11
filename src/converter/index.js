// kilo 10^3       1000
// centi 10^-2     0.01

// 10 000 см > 0.1км

import value from "./value.json";

let pow = pow => Math.pow(10, pow);

let convert = (power, val1, val2) => {
  let subres = pow(val1) * power;
  let res = subres / pow(val2);
  return res
};

(() => {
  let val1 = document.getElementById('val1');
  let val2 = document.getElementById('val2');
  let el;
  value.forEach(function (element) {
    el += `<option value='${element.value}'>${element.name}</option>`;
  });
  val1.innerHTML = el;
  val2.innerHTML = el;
})();

let convertBtn = () => {
  let val1 = document.getElementById('val1');
  let val2 = document.getElementById('val2');

  let res1 = val1.options[val1.selectedIndex].value;
  let res2 = val2.options[val2.selectedIndex].value;

  let input = document.getElementById('input').value;

  let output = val2.options[val2.selectedIndex].text;
  console.log(output);
  document.getElementById('convertToVal').innerHTML = output;

  document.getElementById('output').value = convert(input, res1, res2);
};

let clearBtn = () => {
  let inputs = document.getElementsByTagName('input');
  let forEach = [].forEach;
  forEach.call(inputs, function (el) {
    el.value = ''
  })
};

document.getElementById("convert").addEventListener("click", convertBtn);
document.getElementById("clear").addEventListener("click", clearBtn);