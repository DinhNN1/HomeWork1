//Demo var
// global và local 

// -- global 
var x = 100;
console.log("Giá trị của x =", x);

function varDemo(){
    var y = 200;  //Local
    console.log("Giá trị của x trong hàm: ", x);
    console.log("Giá trị của y trong hàm: ", y);
     

}

varDemo();
console.log("Giá trị của x ngoài hàm: ", x);

var x = 500;  //Khai báo lại 
console.log("Giá trị của x = ", x);