// Dlting rollno from the obj
function dltroll(){
    console.log( this.name + " " + this.sclass+ " " + this.rollno);
    this.rollno = null;
    console.log( this.name + " " + this.sclass+ " " + this.rollno);
}
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

student.dltroll=dltroll;
student.dltroll();



