// function to calculate grades according to marks
function calculateGrade(marks) {
    if (79 < marks && marks <= 100) {
        return  'A';
    }else if (60 <= marks && marks <= 79) {
        return  'B';
    } else if (49 < marks && marks <= 59) {
        return  'C';
    } else if (40 <= marks && marks <= 49) {
        return  'D';
    } else {
        return  'E';
    }
}

// function to prompt for user input
function promptGrade() {
    let marks = prompt("Input student marks");

    // prompt again if invalid input
    if (isNaN(marks) || marks < 0 || marks > 100 || marks === '') {
        alert('Invalid Input! Enter values between 0 and 100');
        promptGrade();
        return;
    }

    let grade = calculateGrade(marks);
    alert (`Student's Grade is ${grade}`);

}

promptGrade();