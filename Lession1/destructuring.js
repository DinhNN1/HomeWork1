// trích xuất dữ liệu từ mảng or đối tượng

var arr = [11, 22,44,66]
console.log(arr);


const[a,b,c] =arr;
console.log("a=", a);
console.log("b", b);
console.log("c", c);


var obj = {
    name: " Định",
    age: "24",
    add: " HN"
}
const{name, age}=obj;
console.log("hello", name);