var ballSize = .75;

//var flock=document.getElementById('flock');

var actor = new ui.Actor({
    as: aframeRole,
    element: document.getElementById('butter'),//flock.getElementsByTagName('a-entity'),
    values: {
        x: ballSize,
    }
});


var actor2 = new ui.Actor({
    as: aframeRole,
    element: document.getElementById('butter2'),//flock.getElementsByTagName('a-entity'),
    values: {
        x: ballSize,
    }
});


/////THE Y STUFF STARTS HERE
  var mockDataFeed = new ui.Input({
    priceX: .5,
    priceY: .5,
    priceZ: .5,
});

var mockDataFeed2 = new ui.Input({
  priceX: .6,
  priceY: .6,
  priceZ: .6,
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

function createInterval(thefunc,pos,interval) { setInterval(function() { thefunc(pos); }, interval); };
function updatePosition(pos) {

    xmove=(ui.calc.random(0, 1)-.5)*.85;
    ymove=(ui.calc.random(0, 1)-.5)*.85;
    zmove=(ui.calc.random(0, 1)-.5)*.85;

    if(Math.abs(pos.get('priceX')+xmove)<1)
      pos.update({
        priceX: pos.get('priceX')+xmove,priceY: pos.get('priceY'),priceZ: pos.get('priceZ')
      });
    if(Math.abs(pos.get('priceY')+ymove)<1)
      pos.update({
        priceX: pos.get('priceX'),priceY: pos.get('priceY')+ymove,priceZ: pos.get('priceZ')
      });
    if(Math.abs(pos.get('priceZ')+zmove)<1)
      pos.update({
        priceX: pos.get('priceX'),priceY: pos.get('priceY'),priceZ: pos.get('priceZ')+zmove
      });
}

createInterval(updatePosition,mockDataFeed,500);
createInterval(updatePosition,mockDataFeed2,500);

/*
setInterval(function () {

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

}, 500);
*/

actor.start(convertPriceToY, mockDataFeed);
actor2.start(convertPriceToY, mockDataFeed2);
