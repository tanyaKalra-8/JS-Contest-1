/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(function(student){
    if(student.marks>50){
      console.log(student);
    }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(student){
    if(student.marks>50){
      console.log(student);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newStudent = {id:4,name:"susan",age:"20",marks:45};
  arr.push(newStudent);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  let failedStudent = arr.filter((student)=> student.marks >= 50 )
  arr.splice(0, arr.length, ...failedStudent);
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 4, name: "tanya", age: "21", marks: 85 },
    { id: 5, name: "ishika", age: "20", marks: 80 },
    { id: 6, name: "rishika", age: "23", marks: 90 },
  ];

  let concatenateArr = arr.concat(newArr);
  console.log(concatenateArr);
}