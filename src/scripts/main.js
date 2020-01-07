'use strict';

const wrapper = document.querySelector('.wrapper');
const text = document.querySelector('.text');
const textCont = text.textContent;

text.style.display = 'none';

for (let i = 0; i < textCont.length; i++) {
  (function() {
    setTimeout(function() {
      const texts = document.createTextNode(textCont[i]);
      const span = document.createElement('span');

      span.appendChild(texts);
      span.classList.add('wave');
      wrapper.appendChild(span);
    }, 140 * i);
  }(i));
}
