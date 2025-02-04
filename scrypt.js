let correctAnswers = 0;

function checkAnswer(questionId, correctYear) {
    const buttons = document.querySelectorAll(`#question${questionId} button`);
    buttons.forEach(button => {
        button.onclick = () => {
            if (parseInt(button.textContent) === correctYear) {
                button.style.backgroundColor = "#90EE90";
                correctAnswers++;
            } else {
                button.style.backgroundColor = "#FFB6C1";
            }
            showResult();
        };
    });
}

function showResult() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Дұрыс жауаптар: ${correctAnswers}/7`;
}