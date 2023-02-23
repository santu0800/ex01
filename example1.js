// let x = 51
// let y = 9
// let z = 7
// if(x>y){
//     console.log(" x is greater")
// }
// else if(y>z){
//     console.log("y is gretaer")
// }
// else{
//     console.log("z is greater")
// }


// let x = 2.2

// if(x %2== 0){
//     console.log(" x is even ");
// }
// else{
//     console.log("x is odd");
// }

// let arr = [1,3,2,4,5];
// for( i=0; i <=arr.length; i++){
//     console.log(arr[i]);
// }


function outerFunction() {
    var outerVariable = "I'm in the outer function!";
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  var innerFunc = outerFunction();
  innerFunc();
