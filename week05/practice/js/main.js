import {Student} from './student.js';

const students = [];

const student1 = new Student('Tim', 'Thayne', '11222333');
const student2 = new Student('Bob', 'Thayne', '33444555');
const student3 = new Student('Bill', 'Thayne', '66777888');

students.push(student1);
students.push(student2);
students.push(student3);

console.log(students);

print();

function print(){
    const tbody = document.querySelector('tbody');

    tbody.innerHTML = students.map(
        student=> 
        `<tr>
            <td>${student.FirstName}</td>
            <td>${student.LastName}</td>
            <td>${student.INumber}</td>
        </tr>`
    ).join('');
}

document.querySelector('button')
    .addEventListener('click', (event) => {
    event.preventDefault(); 

    const newStudent = new Student(
        document.querySelector('#firstName').value,
        document.querySelector('#lastName').value,
        document.querySelector('#iNumber').value

    );       
    students.push(newStudent);
    print();
});