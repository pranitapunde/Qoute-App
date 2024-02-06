let container = document.querySelector(".container");
let button = document.querySelector("button");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let tag = document.querySelector(".badge");


const fetchQuote = async () => {
  const response = await fetch("https://quotable.io/random");
  const data = await response.json();
  h1.innerText = data.content;
  h2.innerText = data.author;
  tag.innerText = data.tags;

  if (data.tags[0].includes("Famous")) {
    
  }
};

button.addEventListener("click", fetchQuote);

// setInterval(() => {
//   fetchQuote();
// }, 5000);

let share = document.querySelector("#share");

// console.log(share);

const skype = (e) =>{
  e.preventDefault()
  window.open("https://www.skype.com/en/")
}
share.addEventListener("click",skype)


 