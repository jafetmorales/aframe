var ballSize = .75;

var actor = new ui.Actor({
    as: aframeRole,
    element: document.getElementById('butter'),
    values: {
        x: ballSize,


    }
});

var bounce = new ui.Simulate({
    values: {
     x: {
          velocity: 10,
          acceleration: -9.8,
          bounce: 0.7,
          min: ballSize
        },

        z: {
          velocity: 10,
          acceleration: -9.8,
          bounce: 0.7,
          min: ballSize
              }
    }
});

  actor.start(bounce);


/////THE Y STUFF STARTS HERE
  var mockDataFeed = new ui.Input({
    priceX: 10,
    priceY: 10,
    priceZ: 10,
});

var convertPriceToY = new ui.Track({
    smooth: 1000,
    direct: true,
    values: {
      x: {
          watch: 'priceX',
          mapFrom: [0, 1],
          mapTo: [-50, 50]
      },
        y: {
            watch: 'priceY',
            mapFrom: [0, 1],
            mapTo: [0, 10]
        },
        z: {
            watch: 'priceZ',
            mapFrom: [0, 1],
            mapTo: [-50, 50]
        }
    }
});

setInterval(function () {
    mockDataFeed.update({
        priceX: ui.calc.random(0, 1),
        priceY: ui.calc.random(0, 1),
        priceZ: ui.calc.random(0, 1)
    });
}, 2000);

actor.start(convertPriceToY, mockDataFeed);
