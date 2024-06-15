//your JS code here.

// Do not change code below this line
// This code will just display the questions to the screen
 const questions = [
            {
                question: "What is the capital of France?",
                choices: ["Paris", "London", "Berlin", "Madrid"],
                answer: "Paris",
            },
            {
                question: "What is the highest mountain in the world?",
                choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
                answer: "Everest",
            },
            {
                question: "What is the largest country by area?",
                choices: ["Russia", "China", "Canada", "United States"],
                answer: "Russia",
            },
            {
                question: "Which is the largest planet in our solar system?",
                choices: ["Earth", "Jupiter", "Mars"],
                answer: "Jupiter",
            },
            {
                question: "What is the capital of Canada?",
                choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
                answer: "Ottawa",
            }
        ];

        const quizContainer = document.getElementById('quizContainer');
        const submitButton = document.getElementById('submit');
        const scoreDisplay = document.getElementById('score');

        let userAnswers = JSON.parse(sessionStorage.getItem('progress')) || {};

        function renderQuestions() {
            quizContainer.innerHTML = '';
            questions.forEach((question, i) => {
                const questionElement = document.createElement('div');
                questionElement.classList.add('question');

                const questionText = document.createElement('p');
                questionText.textContent = question.question;
                questionElement.appendChild(questionText);

                question.choices.forEach(choice => {
                    const choiceLabel = document.createElement('label');
                    choiceLabel.classList.add('option');

                    const choiceInput = document.createElement('input');
                    choiceInput.setAttribute('type', 'radio');
                    choiceInput.setAttribute('name', question-${i});
                    choiceInput.setAttribute('value', choice);

                    if (userAnswers[i] === choice) {
                        choiceInput.checked = true;
                    }

                    choiceInput.addEventListener('change', () => {
                        userAnswers[i] = choice;
                        sessionStorage.setItem('progress', JSON.stringify(userAnswers));
                    });

                    choiceLabel.appendChild(choiceInput);
                    choiceLabel.appendChild(document.createTextNode(choice));
                    questionElement.appendChild(choiceLabel);
                    questionElement.appendChild(document.createElement('br'));
                });

                quizContainer.appendChild(questionElement);
            });
        }

        submitButton.addEventListener('click', () => {
            let score = 0;
            questions.forEach((question, i) => {
                if (userAnswers[i] === question.answer) {
                    score += 1;
                }
            });

            const scoreText = Your score is ${score} out of 5.;
            scoreDisplay.textContent = scoreText;
            localStorage.setItem('score', score);
        });

        renderQuestions();

        const storedScore = localStorage.getItem('score');
        if (storedScore !== null) {
            scoreDisplay.textContent = Your score is ${storedScore} out of 5.;
        }






