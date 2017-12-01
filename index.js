var rect = require('./rectangle')

function solveRectangle(l,b) {
  console.log("solve rect. Where l=" +l+ " and b= " +b);
  if (l<=0||b<=0) {
    console.log("!*************************************************************************!");
    console.log("Rec dimensions should be greater than 0. Here you have l: "+l+ " and b: "+b);
    console.log("__________________________________________________________________________");
  }
  else {
    console.log("______________________________________");
    console.log("=== the area is= " +rect.area(l,b));
    console.log("=== the perimerter is= " +rect.perimerter(l,b));
    console.log("______________________________________");
  }
}

solveRectangle(2,4);
solveRectangle(3,5);
solveRectangle(0,5);
solveRectangle(-3,2);
