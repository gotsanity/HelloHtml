let breadProduct = "toast";

//document.getElementById() - returns a single element matching the id
//document.getElementsByClassName() - returns a list of elements matching the class name

let quote = document.getElementById("quote");

//console.log(quote);

quote.innerHTML = "<strong>this is a great quote</strong>";

quote.style.display = "none";

function showQuote() {
    quote.style.display = "block";
}

let items = document.getElementsByClassName("item");
console.log(items);

items[0].style.color = "green";
items[1].style.color = "red";
items[2].style.color = "blue";