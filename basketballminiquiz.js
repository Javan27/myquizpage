function checkAnswers() {
  const form = document.getElementById('quizForm');
  const resultsDiv = document.getElementById('results');
  const scoreText = document.getElementById('scoreText');


  const correctAnswers = ['Thunder', '4', '2018'];
  let score = 0;

 
  for (let i = 1; i <= 3; i++) {
    const question = form['q' + i];
    let answered = false;

    for (let j = 0; j < question.length; j++) {
      if (question[j].checked) {
        answered = true;
        if (question[j].value === correctAnswers[i - 1]) {
          score++;
        }
        break; 
      }
    }

    if (!answered) {
      continue; 
    }
  }

  let message = '';
  if (score === 3) {
    message = "Perfect Score.You know basketball.";
  } else if (score === 2) {
    message = "You know know a little bit.";
  } else {
    message = "Try watching more games.";
  }


  const passFail = (score >= 2) ? "Pass ✅" : "Try Again ❌";


  resultsDiv.style.display = 'block';
  scoreText.innerHTML = `${message}<br><br>Result: <strong>${passFail}</strong>`;
}
