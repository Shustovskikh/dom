const rotators = document.querySelectorAll('.rotator');

rotators.forEach((rotator) => {
    let cases = Array.from(rotator.querySelectorAll('.rotator__case'));
    let index = 0;

    function rotate() {
        cases[index].classList.remove('rotator__case_active');
        index = (index + 1) % cases.length;
        let nextCase = cases[index];
        nextCase.classList.add('rotator__case_active');
        nextCase.style.color = nextCase.dataset.color;
        setTimeout(rotate, nextCase.dataset.speed);
    }

    rotate();
});
