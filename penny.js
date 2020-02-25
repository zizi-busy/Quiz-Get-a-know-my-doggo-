//Store correct answers for each question inside of the array 
const correctAnswers = ['B','B','A','B'];
const form = document.querySelector (".quiz-form")
const result = document.querySelector ('.result')
const percent = document.querySelector ('.text-warning')
const button = document.querySelector ('.btn')

//attach event listener to the form

form.addEventListener('submit', e =>{
 e.preventDefault();
 
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value] // value of the radio input is the answer
    //check answers

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]){
            score += 25 ; //if answer is correct this will add 25 to the total score
        }
        //show result on page
        percent.textContent = score + "%"
        result.classList.remove('d-none')
     
    })
  
 })
    
 
