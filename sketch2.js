//JSON ===> Javascript Object Notation
var student = {
    name : "Huda",
    class : 7,
    roll_no : 41,
    fav_subject : "Science",
    marks : [90,98,90,99,10],
};

var student1 = {
    name : "Santhya",
    class : 8,
    roll_no : 42,
    fav_subject : "Physics",
    marks : [90,98,90,99,10],
};

function setup(){
    console.log(student.fav_subject);
    console.log(student.name);
}