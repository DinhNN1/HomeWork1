// spread
// cho phép lặp lại các phần tử của mảng 

var oldArr = [ 1, 2 ,3];
var newArr = [oldArr, 4, 5, 6]
var newArr2 = [...oldArr, 4, 5, 6]
console.log('oldArr ', oldArr);
console.log('newArr', newArr); // [[1,2,3],4,5,6]
console.log('newArr2', newArr2 ); // [1,2,3,4,5,6]