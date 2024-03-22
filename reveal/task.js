window.addEventListener('scroll', function() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(function(reveal) {
        const revealTop = reveal.getBoundingClientRect().top;
        const revealBottom = reveal.getBoundingClientRect().bottom;

        if (revealTop <= window.innerHeight && revealBottom >= 0) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
});
