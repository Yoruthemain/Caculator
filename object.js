let myobj={
    firstname:"Muz",
    lastname:"Fagbenro",
    Height:"5'10,",
    Gender:"Male", 
    Race:"Black",
    Greeting:function() {
        return "Good Morning"
    }
}
console.log(myobj["firstname"],myobj.Height,myobj.Greeting());

let student = new Object()
student.firstName="Muz"
student.lastname="Fagbenro"
console.log(student);
function person(firstName,lastname,Age,Gender) {
    this.firstName=firstName
    this.lastname=lastname
    this.Age=Age
    this.Gender=Gender
}
let myFather=new person("Rax",'Adhd','13','Male')
console.log(myFather);
class Staff{
    constructor(StaffId,StaffName,StaffEmail){
        this.StaffId=StaffId
        this.StaffName=StaffName
        this.StaffEmail=StaffEmail
    }
}
let manager= new Staff("342424242",'Joe','Joe@gmal.com')
console.log(manager);