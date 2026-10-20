// School Student Management

const students = [];
let nextStudentId = 1;

function enrollStudent(name, grade, subject) {
    const student = {
        id: nextStudentId++,
        name: name,
        grade: grade,
        subject: subject
    };

    students.push(student);
    console.log(`${name} enrolled successfully.`);
    return student;
}

function displayStudents() {
    console.log("\n--- Student Roster ---");

    if (students.length === 0) {
        console.log("No students are enrolled.");
        return;
    }

    students.forEach((student) => {
        console.log(
            `ID: ${student.id} | Name: ${student.name} | Grade: ${student.grade} | Subject: ${student.subject}`
        );
    });
}

function findStudent(id) {
    const student = students.find((item) => item.id === id);

    if (!student) {
        console.log("Student not found.");
        return null;
    }

    console.log("Student found:", student);
    return student;
}

function removeStudent(id) {
    const index = students.findIndex((item) => item.id === id);

    if (index === -1) {
        console.log("Student not found.");
        return false;
    }

    const [removedStudent] = students.splice(index, 1);
    console.log(`${removedStudent.name} removed from the roster.`);
    return true;
}

// Sample data and operations
enrollStudent("Amaya", 8, "Science");
enrollStudent("Ravi", 9, "Mathematics");

displayStudents();
findStudent(1);
removeStudent(2);
displayStudents();
