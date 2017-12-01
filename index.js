var rect = require('./rectangle')
function solveRectangle(l,b) {
  console.log("solve rect. Where l=" +l+ " and b= " +b);

  // Esta funcion sera tiene un llamado a un callback con 2s de delay
  // una vez que pasa l, b... el tercer parametro que es una funcion ()
  // demorará xx segundos definidos en el setTimeout

  rect(l,b, (err, rectangle)=>{
    // How to handle errror
    if(err){
      console.log("ERROR", err.message);
    }
    else {
      // No se necesita pasar parametros en rectangle.area porque ya los posee el callback en rect ()
      console.log("The area of the rectangle of dim L=" +l + " and B= " +b + " is: " + rectangle.area());
      console.log("The perimeter of the rectangle of dim L=" +l + " and B= " +b + " is: " + rectangle.perimeter() );
    }
  });
  console.log("--------------------");
}

solveRectangle(2,4);
solveRectangle(3,5);
solveRectangle(0,5);
solveRectangle(-3,2);
