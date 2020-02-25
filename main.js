//Store correct answers for each question inside of the array
const correctAnswers = ["B", "B", "A", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const percent = document.querySelector(".text-warning");
const button = document.querySelector(".btn");

//attach event listener to the form

form.addEventListener("submit", e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ]; // value of the radio input is the answer
  //check answers

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25; //if answer is correct this will add 25 to the total score
    }
    //show result on page
    scrollTo(0, 0);
    //percent.textContent = score + "%"; //without interval you need only this
    result.classList.remove("d-none");

    let output = 0;
    const timer = setInterval(() => {
        percent.textContent = output + "%";
        if (output === score){
            clearInterval (timer)
        }else{
            output++;
        }
    }, 30);
  });
});

//SET INTERVAL 
/* let i = 0;
const timer = setInterval(() => {
  i++;
  if (i === 5) {
    clearInterval(timer);
  }
}, 1000);
 */
//SET TIME OUT -WINDOW OBJECT

/* setTimeout (() => {
 alert ('hello from Penny')
 },3000)
  */
