let question = document.getElementById("question");
let answer = document.querySelectorAll(".answers")
const ListofQues = [
    "Q.Who invented Java Programming?",
    "Q.Which statement is true about Java?",
    "Q.Which component is used to compile, debug and execute the java programs",
    "Q.Which of these cannot be used for a variable name in Java",
    "Q.What is the extension of java code files?"
];

const ListofAns = [
    ["a) Guido van Rossum","b) James Gosling","c) Vedant","d) Dennis Ritchie"],
    ["a) Java is a sequence-dependent programming language","b) Java is a code dependent programming language","c) Java is a platform-dependent programming language","d) Java is a platform-independent programming language"],
    ["a) JRE","b) JIT","c) JDK","d) JVM"],
    ["a) identifier & keyword","b) identifier","c) keyword","d) none of the mentioned"],
    ["a) .js","b) .txt","c) .class","d) .java"]
];


const CorrectAns = [
    "b) James Gosling",
    "d) Java is a platform-independent programming language",
    "c) JDK",
    "c) keyword",
    "d) .java"
];

// console.log(question.innerText);
let count = 0;
let points = 0;
let q;
    let button = document.getElementById("submit-btn");
    button.addEventListener("click" ,() => {
        count++;
        if(count == 4){
            alert("You have scored " + points)
            count = 0;
            points = 0;
        }
        document.getElementById("1").style.backgroundColor = "#8a2be2";
        document.getElementById("2").style.backgroundColor = "#8a2be2";
        document.getElementById("3").style.backgroundColor = "#8a2be2";
        document.getElementById("4").style.backgroundColor = "#8a2be2";



        let a = Math.random() * (4 - 0) + 0;
        q = Math.floor(a);
        question.innerText = ListofQues[q]
        document.getElementById("1").innerText = ListofAns[q][0];
        document.getElementById("2").innerText = ListofAns[q][1];
        document.getElementById("3").innerText = ListofAns[q][2];
        document.getElementById("4").innerText = ListofAns[q][3];
    })



    let answerBoxx = document.getElementById("answerBox")
    answerBoxx.addEventListener("click", (e) => {
        if(e.target.innerText === CorrectAns[q]){
            (e.target.style.backgroundColor = "#00FF00")
            points++;
        }
        else{
            (e.target.style.backgroundColor = "red")
            answer.forEach(element => {
                if(element.innerText === CorrectAns[q]){
                    (element.style.backgroundColor = "#00FF00")
                }
            });
        }
    })



