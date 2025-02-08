document.getElementById('openCard').addEventListener('click', function() {
    document.getElementById('card').classList.toggle('flipped');
    document.getElementById('back').style.display = 'flex';
});

const yesButtons = document.querySelectorAll('.yes');
yesButtons.forEach(button => {
    button.addEventListener('click', function() {
        createHearts();
    });
});

function createHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.style.opacity = Math.random();
        heart.innerHTML = '❤️';
        document.getElementById('hearts').appendChild(heart);
        
        heart.animate([
            { transform: 'translateY(0)' },
            { transform: 'translateY(-100vh)' }
        ], {
            duration: 2000,
            easing: 'ease-in',
            fill: 'forwards'
        });

        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}