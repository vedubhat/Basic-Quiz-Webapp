const questions = [
    {
        question: "Q.Who invented Java Programming?",
        options: ["a) Guido van Rossum", "b) James Gosling", "c) Vedant", "d) Dennis Ritchie"],
        ansIndex: 1
    },
    {
        question: "Q.Which statement is true about Java?",
        options: ["a) Java is a sequence-dependent programming language", "b) Java is a code dependent programming language", "c) Java is a platform-dependent programming language", "d) Java is a platform-independent programming language"],
        ansIndex: 3
    },
    {
        question: "Q.Which component is used to compile, debug and execute the java programs",
        options: ["a) JRE", "b) JIT", "c) JDK", "d) JVM"],
        ansIndex: 2
    },
    {
        question: "Q.Which of these cannot be used for a variable name in Java",
        options: ["a) identifier & keyword", "b) identifier", "c) keyword", "d) none of the mentioned"],
        ansIndex: 2
    }
]

let question = document.getElementById("question");
let answer = document.querySelectorAll(".answers");
let button = document.getElementById("submit-btn");


function start() {
    question.innerText = "Do you want to start the quiz ?";
    answer.innerText = "";
    button.innerText = "Start";
}

start();
let count = 0;
let points = 0;
let ques;

button.addEventListener("click", () => {

    button.innerText = "Next";
    for (let i = 0; i < 4; i++) {
        document.getElementById(i+1).style.backgroundColor = "#8a2be2";
    }

    let a = Math.random() * (4 - 0) + 0;
    ques = questions[Math.floor(a)];
    question.innerText = ques.question
    ques.options.forEach((option, idx) => {
        document.getElementById(idx + 1).innerText = option
    })

})



let answerBoxx = document.getElementById("answerBox")
answerBoxx.addEventListener("click", (e) => {
    const correctAns = ques.options[ques.ansIndex];
    console.log("coloring", correctAns);
    console.log(e.target.innerText);
    if (e.target.innerText === correctAns) {
        (e.target.style.backgroundColor = "#00FF00")
        points++;
    }
    else {
        (e.target.style.backgroundColor = "red")
        answer.forEach(element => {
            if (element.innerText === correctAns) {
                (element.style.backgroundColor = "#00FF00")
            }
        });
    }
})



