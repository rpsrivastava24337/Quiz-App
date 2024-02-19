//https://opentdb.com/api.php?amount=10&type=multiple

let apidata, data;
let correctOptions
let incorrectOptions
let options
let index = 0
let incorrect
async function fetching() {
    const response = await fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple");
    apidata = await response.json();
    data = apidata.results[0]
    display(data);
}
fetching();

function display(value) {

    document.getElementById("question").innerHTML = value.question;
    options = document.querySelectorAll(".btn")
    incorrectOptions = value.incorrect_answers
    incorrect = value.incorrect_answers
    correctOptions = value.correct_answer
    incorrectOptions.splice((Math.floor(Math.random() * incorrectOptions.length + 1)), 0, correctOptions)

    options.forEach(element => {

        element.innerHTML = incorrectOptions[index]
        index++


    });
}


function check(event) {

    var data2 = event.target.innerHTML;
    if (data2 == data.correct_answer) {

        options.forEach((item) => {
            item.disabled = true;
        })
        event.target.classList.add("correct");

    }
    else {
        options.forEach((item) => {
            item.disabled = true;

        })
        event.target.classList.add("wrong");
        document.getElementById("correct").innerHTML = "Correct Answer is :" + data.correct_answer

    }

}

let onNext = document.getElementById("next-btn")
onNext.addEventListener("click", () => {
    display(data)

})

