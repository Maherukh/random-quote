let quote = document.querySelector("#text");
let author = document.querySelector("#author");
let button = document.querySelector("#new-quote");

function newquote() {
fetch('https://api.quotable.io/random')
.then(response => response.json())
.then(data => {
    quote.innerText = data.content;
    author.innerText = "- " + data.author;
})
}
newquote()
button.addEventListener("click", newquote);