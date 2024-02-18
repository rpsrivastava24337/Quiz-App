//https://opentdb.com/api.php?amount=10&type=multiple

let apidata, data;
let correctOptions
let incorrectOptions
let options
let index = 0
async function fetching() {
    const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
    apidata = await response.json();
    data = apidata.results[0]
    display(data);
}
fetching();

function display(value) {
    document.getElementById("question").innerHTML = value.question;
    options = document.querySelectorAll(".btn")
    incorrectOptions = value.incorrect_answers
    correctOptions = value.correct_answer
    incorrectOptions.splice((Math.floor(Math.random() * incorrectOptions.length + 1)), 0, correctOptions)

    options.forEach(element => {

        element.innerHTML = incorrectOptions[index]
        index++



    });
}


// function check(event) {
//     var data2 = event.target.innerHTML;

//     if (data2 == data.results[0].correct_answer) {
//         event.target.classList.add("correct");
//         console.log("correct");

//     }

// }