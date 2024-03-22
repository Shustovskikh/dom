document.addEventListener('DOMContentLoaded', function() {
    const book = document.querySelector('#book');
    const fontSizeButtons = Array.from(document.querySelectorAll('.font-size'));
    const colorButtons = Array.from(document.querySelectorAll('.color'));

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
            let activeButton = document.querySelector(`.${button.parentElement.classList[1]} .color_active`);
            if (activeButton) {
                activeButton.classList.remove('color_active');
            }
            button.classList.add('color_active');
            let colorType = button.parentElement.classList[1].split('_')[1];
            let colorValue = button.dataset[`${colorType}Color`];
            let activeColor = Array.from(book.classList).find(className => className.startsWith(`book_${colorType}-`));
            if (activeColor) {
                book.classList.remove(activeColor);
            }
            if (colorValue) {
                book.classList.add(`book_${colorType}-${colorValue}`);
            }
        });
    });
});
