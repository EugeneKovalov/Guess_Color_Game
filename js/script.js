let easyBtn = document.querySelector('.easy-btn');
let hardBtn = document.querySelector('.hard-btn');
let newColorBtn = document.querySelector('.new-color-btn');
let goalColor = document.getElementById('goal-color');
let squares = document.querySelectorAll('.square');
let hint = document.getElementById('hint');
let headerColor = document.querySelector('.text-header');

generateColors(6);

function sameColors(color, size) {
    for (let i = 0; i < size; i++) {
        squares[i].style.display = 'block';
        squares[i].style.backgroundColor = color;
    }
}
function generateColors(size) {
    let colors = [];
    headerColor.style.backgroundColor = 'darkcyan';
    hint.innerText = '';

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.display = 'none';
    }

    for (let i = 0; i < size; i++) {
        colors.push('rgb(' + randomColor(0, 255) + ', ' + randomColor(0, 255) + ', ' + randomColor(0, 255) + ')');
    }

    let pickedColor = colors[randomColor(0, size)];
    goalColor.innerText = pickedColor;

    for (let i = 0; i < size; i++) {
        squares[i].style.display = 'block';
        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener('click', function () {
            let clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                hint.innerText = 'GRAAATZ';
                headerColor.style.backgroundColor = pickedColor;

                sameColors(pickedColor, size);
            } else {
                hint.innerText = 'Try Again';
                this.style.display = 'none';
            }
        });
    }
}

function randomColor(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

newColorBtn.addEventListener('click', function () {
    generateColors(6);
});

easyBtn.addEventListener('click', function (e) {
    generateColors(3);
    hardBtn.classList.remove('selected');
    easyBtn.classList.add('selected');
});

hardBtn.addEventListener('click', function (e) {
    generateColors(6);
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');
});