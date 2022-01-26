let form = document.forms.regform;
let textArea = document.querySelector('.text_area');
let textBefore = document.querySelector('.text_before');
let textAfter = document.querySelector('.text_after');

let openNextEx = () => {
    form.style.display = 'none';
    textArea[0].style.display = 'block';

};

let changeText = () => {
    let str = textBefore.textContent;
    console.log(str);
    textAfter.innerText = str.replace(/\B'|'\B/g, '"');

};