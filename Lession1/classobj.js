class Person {
    constructor(){   ///Hàm khởi tạo 
        this.name = " Nguyễn Ngọc Định";
        this.age = "24";
    }
    getName(){
        return this.name;
    }
    setAge(age){
        this.age= age;
    
    }
    getAge(){
        return this.age;
    }
}

// sử dụng lớp đối tượng
var person = new Person();
person.setAge(25)
console.log("Tên:" + person.getName());
console.log("Tuổi:"+ person.getAge());

///VS2

// Lớp kế thừa 

class Student extends Person{
    constructor( name, age, studentId){
        super(name, age);
        this.studentId= "SV2";
    }
    getStudentInfo(){
        return "Tên:" + this.getName() + "-Tuổi:" + this.getAge() + "-Mã SV:" + this.studentId;
    }
}

var student = new Student;
console.log(student.getStudentInfo());



