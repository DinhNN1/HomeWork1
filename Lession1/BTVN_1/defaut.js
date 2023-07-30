// tham số mặc định 
// khai báo cuối ds tham số 

function dinh(num1, num2=2){
    let yen= num1 + num2;
    console.log(num1 + '+' + num2 + '=' + yen);
}
 dinh(10); // 12
 dinh(10, 15); // 25

 // khai báo trong hàm 
 function showName( name){
    name = name || "Định";
    console.log('hello', name);
 }
 showName();
 showName('ahiahi');
