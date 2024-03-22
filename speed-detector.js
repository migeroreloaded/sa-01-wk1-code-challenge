function speedDetector(inputSpeed) {
    // Define the speed limit as a constant
    const speedLimit = 70;

    // Initialize demeritPoints to 0
    let demeritPoints = 0;

    // Check if the inputSpeed is within the valid range
    if (inputSpeed >= 0 && inputSpeed <= 180) {

        // Check if the inputSpeed is less than or equal to the speed limit
        if (inputSpeed <= speedLimit) {
            // If so, print "Ok"
            console.log("Ok");
        } else {
            // Calculate demeritPoints based on the difference between inputSpeed and speedLimit
            demeritPoints = Math.floor((inputSpeed - speedLimit) / 5);

            // Print the number of demeritPoints
            console.log(`Points: ${demeritPoints}`);

            // Check if demeritPoints exceed 12
            if (demeritPoints > 12) {
                // If so, print "License suspended"
                console.log("License suspended");
            }
        }
    } else {
        // If the inputSpeed is not within the valid range, print "Invalid Input"
        console.log("Invalid Input");
    }
    
}

// Prompt user to input the car speed
const speedInput = parseFloat(prompt("Enter the speed of the car:"));

// initialize function and start program
speedDetector(speedInput);
