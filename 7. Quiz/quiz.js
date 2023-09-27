// store the correct answers in an array
const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

// this prevents the form default action... stops the form from refreshing
form.addEventListener('submit', e =>{
    e.preventDefault();

    let score = 0 // initialise the score
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers
    userAnswer.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

    // show result on page
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    // scroll to the top page when the submit button is clicked
    scrollTo(0, 0);

    // show score animation
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else{
            output++;
        }
    }, 30);

});