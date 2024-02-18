//https://opentdb.com/api.php?amount=10&type=multiple

let data;
async function fetching()
{
const response=await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
data=await response.json();
document.getElementById("question").innerHTML=data.results[0].question;
document.getElementById("btn2").innerHTML=data.results[0].incorrect_answers[0];
document.getElementById("btn3").innerHTML=data.results[0].incorrect_answers[1];
document.getElementById("btn1").innerHTML=data.results[0].correct_answer;
document.getElementById("btn4").innerHTML=data.results[0].incorrect_answers[2];
}
fetching();
function check(event)
{
    var data2=event.target.innerHTML;
    
    if(data2==data.results[0].correct_answer)
    {
        event.target.classList.add("correct");
        console.log("correct");
    }

    
}