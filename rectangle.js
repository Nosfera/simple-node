/*3 parameter function: x y callback*/
// O pasas un error sino una funcion que computa el area del rectangulo.

// Here the x & y parameters will be available for the two functions: perimeter and area
module.exports = (x,y,callback) =>{
  if (x <=0 || y <=0) {
    setTimeout(()=>
      // O pasas un error
      // The Error Object, will have attached the message that can be retrieved by the solveRectangle()
      callback(
        new Error("Rec dimensions should be greater than 0. Here you have L =: "+x + " and b= "+y),
        null),
      2000);
  }
  else {
    setTimeout(()=>
      // O pasas funcion que computa el area del rectangulo
      callback(null,
        {
          // this x & y values are provided by solveRectangle()
          // and now area & parameter are send as an Object so
          // instead of using "area =" this will become parameters of the funcion "rectangle.area:"
          area: (x,y)=>(x*y),
          perimeter: (x,y)=>(2*(x+y))
          // then in error handling if the current function callback resolves success
          // the
        }),
      2000);
  }
}
