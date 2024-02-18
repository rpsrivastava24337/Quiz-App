//https://opentdb.com/api.php?amount=10&type=multiple

let boxes=document.getElementsByClassName("first");
async function fetching()
{
const response=await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
var data=await response.json();
console.log(data);
document.getElementById("btn").innerHTML=data.results[0].question;
document.getElementById("btn1").innerHTML=data.results[0].correct_answer;
document.getElementById("btn2").innerHTML=data.results[0].incorrect_answers[0];
document.getElementById("btn3").innerHTML=data.results[0].incorrect_answers[1];
document.getElementById("btn4").innerHTML=data.results[0].incorrect_answers[2];
}
fetching();
function check(event)
{
    event.preventDefault();
    event.target.
}