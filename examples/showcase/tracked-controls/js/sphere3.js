var ballSize2 = .75;

var cube = new ui.Actor({
  as: aframeRole,
  element: document.getElementById('sphere'),
  values: {
      y: ballSize2,
      radius: ballSize2
  }
});

const moveBackAndForth = new ui.Tween({
    values: {
        x: 5
    },
    duration: 600,
    ease: 'easeInOut',
    yoyo: true
});


/*const springBack = motion.physics({
    values: {
        x: {
            to: 7,
            spring: 100,
            friction: .4
        },
        y: {
            to: 7,
            spring: 100,
            friction: .4
        }
    }
}).on(cube);
*/
//springBack.start();

cube.start(moveBackAndForth);
