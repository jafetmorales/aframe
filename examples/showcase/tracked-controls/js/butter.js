var ballSize = .75;

var actor = new ui.Actor({
    as: aframeRole,
    element: document.getElementById('butter'),
    values: {
        x: ballSize,


    }
});

/*var bounce = new ui.Simulate({
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
*/

/////THE Y STUFF STARTS HERE
  var mockDataFeed = new ui.Input({
    priceX: .5,
    priceY: .5,
    priceZ: .5,
});

var convertPriceToY = new ui.Track({
    smooth: 2000,
    direct: true,
    values: {
      x: {
          watch: 'priceX',
          mapFrom: [0, 1],
          mapTo: [-20, 20]
      },
        y: {
            watch: 'priceY',
            mapFrom: [0, 1],
            mapTo: [1, 20]
        },
        z: {
            watch: 'priceZ',
            mapFrom: [0, 1],
            mapTo: [-20, 20]
        }
    }
});

setInterval(function () {
/*    mockDataFeed.update({
        priceX: mockDataFeed.get('priceX')+ui.calc.random(0, 1)*.50,
        priceY: mockDataFeed.get('priceY')+ui.calc.random(0, 1)*.50,
        priceZ: mockDataFeed.get('priceZ')+ui.calc.random(0, 1)*.50
    });
*/
    xmove=(ui.calc.random(0, 1)-.5)*.85;
    ymove=(ui.calc.random(0, 1)-.5)*.85;
    zmove=(ui.calc.random(0, 1)-.5)*.85;

    if(Math.abs(mockDataFeed.get('priceX')+xmove)<1)
      mockDataFeed.update({
        priceX: mockDataFeed.get('priceX')+xmove,priceY: mockDataFeed.get('priceY'),priceZ: mockDataFeed.get('priceZ')
      });
    //  mockDataFeed.update(priceX,mockDataFeed.get('priceX')+xmove);
    if(Math.abs(mockDataFeed.get('priceY')+ymove)<1)
      mockDataFeed.update({
        priceX: mockDataFeed.get('priceX'),priceY: mockDataFeed.get('priceY')+ymove,priceZ: mockDataFeed.get('priceZ')
      });
      //mockDataFeed.update(priceY,mockDataFeed.get('priceY')+ymove);
    if(Math.abs(mockDataFeed.get('priceZ')+zmove)<1)
      mockDataFeed.update({
        priceX: mockDataFeed.get('priceX'),priceY: mockDataFeed.get('priceY'),priceZ: mockDataFeed.get('priceZ')+zmove
      });
      //mockDataFeed.update(priceZ,mockDataFeed.get('priceZ')+zmove);

console.log(mockDataFeed.get('priceX'));
console.log(mockDataFeed.get('priceY'));
console.log(mockDataFeed.get('priceZ'));


/*    sleep(300).then(() => {
      mockDataFeed.update({
          priceX: mockDataFeed.get('priceX'),priceY: ui.calc.random(0, 1),priceZ: mockDataFeed.get('priceZ')
      });
    });
    sleep(300).then(() => {
      mockDataFeed.update({
          priceX: mockDataFeed.get('priceX'),priceY: mockDataFeed.get('priceY'), priceZ: ui.calc.random(0, 1)
      });
    });
*/
/*  //  sleep(500);
    mockDataFeed.update({
        priceZ: ui.calc.random(0, 1)
    });
    */
}, 500);

actor.start(convertPriceToY, mockDataFeed);


// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
// Usage!
