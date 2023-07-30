//Tham số mặc định 
// khai báo cuối danh sách tham số 

function add( num1, num2=100){
    let res = num1 + num2;
    console.log( num1 + "+" + num2 + "= " + res )

}

add( 100);
add( 100, 300);


// Khai báo bên trong hàm 
function showName(name){
    name = name || "Dev";
    console.log( " welcome to ",name)
}
showName();
showName("Nguyễn Ngọc Định")