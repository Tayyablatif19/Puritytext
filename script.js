function calculateScore() {
    // Get all checkboxes within the form
    var checkboxes = document.querySelectorAll('#quizForm input[type="checkbox"]');
    
    // Initialize the score
    var score = 0;

    // Loop through checkboxes and calculate the score
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            score += parseInt(checkbox.value);
        }
    });

    // Determine the grade based on the score
    var grade = '';
    if (score >= 0 && score <= 10) {
        grade = 'get a life';
    } else if (score >= 11 && score <= 20) {
        grade = 'make some friends son';
    } else if (score >= 21 && score <= 30) {
        grade = 'Do better';
    } else if (score >= 31 && score <= 40) {
        grade = 'I assume your gpa is 2.smth';
    } else if (score >= 41 && score <= 50) {
        grade = 'NICE';
    }

    // Display the result
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Dankness Level ' + score + ' <br>  ' + grade;
    alert('Your Score: ' + score + ' points\nGrade: ' + grade);
}
