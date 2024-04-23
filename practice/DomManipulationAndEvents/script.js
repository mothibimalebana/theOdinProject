//declaration
const container = document.getElementById("container");
const content = document.createElement("div");

content.classList.add("content");
content.textContent = "This is glorius text content";

container.appendChild(content);

/**
 * Exercise:
 * 1.a <p> with red text that says “Hey I’m red!”
 * 2.an <h3> with blue text that says “I’m a blue h3!”
 * 3.a <div> with a black border and pink background color with the following elements inside of it:
 *      another <h1> that says “I’m in a div”
 *      a <p> that says “ME TOO!”
 *      Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
 */

//Solutions:
//1
const rP = document.createElement("p");
rP.textContent = "Hey, I'm red!";
rP.style.color = "red"

container.appendChild(rP);

//2
const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = "blue"

container.appendChild(blueH3);

//3
//declaration
const blackDiv = document.createElement("div");
const h1 = document.createElement("h1");
const p = document.createElement("p");

//Style
blackDiv.style.backgroundColor = "pink";
blackDiv.style.borderColor = "black";
blackDiv.style.borderStyle = "solid";

//Appending
blackDiv.appendChild(h1);
blackDiv.appendChild(p);

//Adding text content
h1.textContent = "I'm in a div";
p.textContent = "ME TOO!";

container.appendChild(blackDiv);