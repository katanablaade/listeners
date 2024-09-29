'use strict';

const btn = document.querySelector('#btn');
const input = document.querySelector('#text');
const square = document.querySelector('#square');
const eBtn = document.querySelector('#e_btn');
const inputRange = document.querySelector('#range');
const circle = document.querySelector('#circle');
const rangeSpan = document.querySelector('#range-span');
const textSpan = document.querySelector('#text-span');

inputRange.value = 0;
circle.style.height = '0';
circle.style.width = '0';

textSpan.textContent = 'Введите: red, green, yellow';

eBtn.style.display = 'none';

btn.addEventListener('click', function () {
  square.style.backgroundColor = input.value;
});

inputRange.addEventListener('input', function (event) {
  rangeSpan.textContent = event.target.value;
  circle.style.height = inputRange.value + '%';
  circle.style.width = inputRange.value + '%';
});
