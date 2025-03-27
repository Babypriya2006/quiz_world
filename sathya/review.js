document.addEventListener("DOMContentLoaded", function () {
    const reviewContainer = document.getElementById("review-container");
    const quizReview = JSON.parse(localStorage.getItem("quizReview")) || [];

    if (quizReview.length === 0) {
        reviewContainer.innerHTML = "<p>No review data available.</p>";
        return;
    }

    quizReview.forEach((entry, index) => {
        let color = entry.isCorrect ? "green" : "red";
        let correctAnswerText = entry.correctAnswer ? entry.correctAnswer : "Not Found";

        reviewContainer.innerHTML += `
            <p><strong>${index + 1}.</strong> ${entry.question}</p>
            <p style="color: ${color};">Your Answer: ${entry.selectedAnswer}</p>
            <p style="color: blue;">Correct Answer: ${correctAnswerText}</p>
            <hr>
        `;
    });
});