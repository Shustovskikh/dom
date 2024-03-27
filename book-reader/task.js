document.addEventListener('DOMContentLoaded', function() {
    const book = document.querySelector('#book');
    const fontSizeButtons = Array.from(document.querySelectorAll('.font-size'));
    const colorButtons = Array.from(document.querySelectorAll('.color'));
    let textColor = '';
    let bgColor = '';

    fontSizeButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            let activeButton = document.querySelector('.font-size_active');
            if (activeButton) {
                activeButton.classList.remove('font-size_active');
            }
            button.classList.add('font-size_active');
            book.className = 'book';
            let fontSize = button.dataset.size;
            if (fontSize) {
                book.classList.add(`book_fs-${fontSize}`);
            }
        });
    });

    colorButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            let colorValue = button.dataset.textColor || button.dataset.bgColor || 'white';
            let colorType = button.dataset.textColor ? 'text' : 'bg';

            if (colorType === 'text' && colorValue === bgColor || colorType === 'bg' && colorValue === textColor) {
                alert('Цвета текста и фона не могут совпадать. Пожалуйста, выберите другой цвет. Спасибо за понимание.');
                return;
            }

            if (colorType === 'text') {
                textColor = colorValue;
            } else {
                bgColor = colorValue;
            }

            let activeButton = document.querySelector(`.${button.parentElement.classList[1]} .color_active`);
            if (activeButton) {
                activeButton.classList.remove('color_active');
            }
            button.classList.add('color_active');

            let prefix = colorType === 'text' ? 'text' : 'bg';
            let activeColor = Array.from(book.classList).find(className => className.startsWith(`book_${prefix}-`));
            if (activeColor) {
                book.classList.remove(activeColor);
            }
            book.classList.add(`book_${prefix}-${colorValue}`);
        });
    });
});