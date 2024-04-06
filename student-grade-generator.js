function calculateGrade(marks) {
    // If the student's marks are between 80 and 100 (inclusive), return 'A'.
    if (79 < marks && marks <= 100) {
        return  'A';
    }
    // If the student's marks are between 60 and 79 (inclusive), return 'B'.
    else if (60 <= marks && marks <= 79) {
        return  'B';
    }
    // If the student's marks are between 50 and 59 (inclusive), return 'C'.
    else if (49 < marks && marks <= 59) {
        return  'C';
    }
    // If the student's marks are between 40 and 49 (inclusive), return 'D'.
    else if (40 <= marks && marks <= 49) {
        return  'D';
    }
    // If the student's marks are below 40, return 'E'.
    else {
        return  'E';
    }
}

// Function to calculate the grade of a student based on their marks
function promptGrade() {
    // Prompt the user to input the student's marks
    let marks = prompt("Input student marks");

    // Check if the input is valid
    if (isNaN(marks) || marks < 0 || marks > 100 || marks === '') {
        // If the input is invalid, display an error message and prompt the user again
        alert('Invalid Input! Enter values between 0 and 100');
        // Call the function again to prompt the user
        promptGrade(); 
        return; // Exit the function
    }

    // Calculate the grade based on the student's marks
    let grade = calculateGrade(marks);

    // Display the student's grade
    alert (`Student's Grade is ${grade}`);
}
// Call the promptGrade function to start the program
promptGrade();