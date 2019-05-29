
// let element = document.querySelector('div');
// element.style.backgroundColor = 'cyan';

// element.addEventListener('mouseover', function () {
//     element.style.color = 'red';
// });
// element.addEventListener('mouseout', function () {
//     element.style.color = '#000';
// });




let big_img = document.querySelector('.big_img');
let img_block = document.querySelectorAll('.mini_img');

    for (let i = 0; i < img_block.length; i++) {
        let origin_link = big_img.src;
        img_block[i].addEventListener('mouseover', function() {
            big_img.src = img_block[i].src;
        })
        img_block[i].addEventListener('mouseout', function() {
            big_img.src = origin_link;
        })
    }






// let input = document.querySelector('input');
// let div = document.querySelector('div');

// input.addEventListener('change', function(){
//     console.log(input.value);
//     div.innerHTML = input.value;
// })