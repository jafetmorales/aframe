const ball = document.getElementById('sphere');

const moveX = motion.track({
    values: {
        x: {}
    }
});

const moveBallX = moveX.on(ball);

const changeColor = motion.tween({
    duration: 2000,
    ease: motion.easing.easeInOut,
    flip: Infinity,
    values: {
        backgroundColor: '#2f47f7'
    }
});

changeColor.on(ball).start();
