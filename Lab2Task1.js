function StdProp(){
    return(
        this.name + " " + this.sclass+ " " + this.rollno
    );
}


var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

student.StdProp=StdProp;

console.log(student.StdProp());


