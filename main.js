
// let element = document.querySelector('div');
// element.style.backgroundColor = 'cyan';

// element.addEventListener('mouseover', function () {
//     element.style.color = 'red';
// });
// element.addEventListener('mouseout', function () {
//     element.style.color = '#000';
// });




let big_img = document.querySelector('.big_img');
let big_img_src = big_img.src;

let img_block = document.querySelectorAll('div');

let mini_img = document.querySelector(".mini_img");
let mini_img_src = mini_img.src;

// console.log(big_img_src, mini_img_src);
for (let i = 0; i < mini_img.length; i++) {

}
mini_img.addEventListener('mouseover', function () {
    big_img.src = mini_img_src;
});
mini_img.addEventListener('mouseover', function () {

});



// let input = document.querySelector('input');
// let div = document.querySelector('div');

// input.addEventListener('change', function(){
//     console.log(input.value);
//     div.innerHTML = input.value;
// })