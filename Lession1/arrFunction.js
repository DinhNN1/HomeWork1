// nomar Function 
function add(num1, num2 ){
    return num1+ num2;
}
console.log("add:", add(100, 200));


var sum = function( num1, num2){
    return num1+ num2;
}
console.log("add:", add(100, 600));

// arrow function

var fn_Add= ( num1, num2) =>{
    return num1+ num2;
}
console.log("fn_Add:", fn_Add(100, 140));

const fn_Show= ( name= " Định") => {
    console.log("Hello", name);
}
fn_Show();
fn_Show( " Yến")
