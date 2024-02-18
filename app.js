//https://opentdb.com/api.php?amount=10&type=multiple
let apiLink="https://opentdb.com/api.php?amount=10&type=multiple"

async function fetching()
{
const response=await fetch(apiLink);
var data=await response.json();
console.log(data);
}
fetching()