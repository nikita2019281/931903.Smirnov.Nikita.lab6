const buttons = document.querySelectorAll("button");
const left_img = document.querySelector(".left_content");
const right_img = document.querySelector(".right_content");

const main_part = 95;
const other_part = 100 - main_part;

const main_width = String(main_part) + '%';
const other_width = String(other_part) + '%';
const both_width = '50%';

buttons.forEach(button => {
    button.onclick = () => {
        switch (button.className) {
            case 'left_button':
                left_img.style.width = main_width;
                right_img.style.width = other_width;
                left_img.querySelector("img").style.display = 'block';
                right_img.querySelector("img").style.display = 'none';
                break;
            case 'center_button':
                left_img.style.width = both_width;
                right_img.style.width = both_width;
                left_img.querySelector("img").style.display = 'block';
                right_img.querySelector("img").style.display = 'block';
                break;
            case 'right_button':
                left_img.style.width = other_width;
                right_img.style.width = main_width;              
                right_img.querySelector("img").style.display = 'block';  
                left_img.querySelector("img").style.display = 'none';
                break;
        }
    }
})