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




var ballSize = .75;


/*
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
*/

var butterFlock=document.getElementsByClassName("butter");//getElementById('butterFlock').getElementsByTagName('a-entity');
var actors=[];
var coords=[];
for (var i = 0; i < butterFlock.length; i++) {
  actors.push(new ui.Actor({
      as: aframeRole,
      element: butterFlock[i],
      values: {
      x: ballSize,
      }
  }));

coords[i]=new ui.Input({
  priceX: .5,
  priceY: .5,
  priceZ: .5,
});

createInterval(updatePosition,coords[i],500);
actors[i].start(convertPriceToY, coords[i]);
}



/*
/////THE Y STUFF STARTS HERE
  var mockDataFeed = new ui.Input({
    priceX: .5,
    priceY: .5,
    priceZ: .5,
});

var mockDataFeed2 = new ui.Input({
  priceX: .5,
  priceY: .5,
  priceZ: .5,
});
*/
/*
createInterval(updatePosition,coords[0],500);
createInterval(updatePosition,coords[1],500);
actors[0].start(convertPriceToY, coords[0]);
actors[1].start(convertPriceToY, coords[1]);
*/
