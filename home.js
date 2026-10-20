// Student Management System

const students = [];

function addStudent(name, age, course) {
    const student = {
        id: students.length + 1,
        name: name,
        age: age,
        course: course
    };

    students.push(student);
    console.log("Student added successfully!");
}

function displayStudents() {
    console.log("\n--- Student List ---");

    students.forEach((student) => {
        console.log(`ID: ${student.id}`);
        console.log(`Name: ${student.name}`);
        console.log(`Age: ${student.age}`);
        console.log(`Course: ${student.course}`);
        console.log("-------------------");
    });
}

function findStudent(id) {
    const student = students.find((s) => s.id === id);

    if (student) {
        console.log("Student found:", student);
    } else {
        console.log("Student not found!");
    }
}

function deleteStudent(id) {
    const index = students.findIndex((s) => s.id === id);

    if (index !== -1) {
        students.splice(index, 1);
        console.log("Student deleted successfully!");
    } else {
        console.log("Student not found!");
    }
}

// Sample data
addStudent("Kamal", 22, "Software Engineering");
addStudent("Nimal", 23, "Information Technology");

// Display all students
displayStudents();

// Search for a student
findStudent(1);

// Delete a student
deleteStudent(2);

// Display updated list
displayStudents();