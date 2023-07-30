//let 
let x = 1;
if ( x === 1){
    let x = 10 ;
    console.log(' Giá giạ x trong if:', x);  //x = 10
}
console.log('Giá trị x ngoài if:', x); // x= 5

// var
var y = 2;
console.log(' Giá trị của y =', y);

 function varDemo(){
    var x = 3;
        console.log('Giá trị của x =', x); // x=3
        console.log('Giá trị của y =', y); // y = 2
 }

 varDemo();
 console.log('Giá trị của x ngoài hàm y =', y); //y=2

 var y = 5; // khai báo lại 
 console.log('Giá trị của y =', y); //y =5


//const
const num1 = 100;
console.log('Num1 = ', num1);
if ( true){
    console.log('Num1 =', num1);
}


