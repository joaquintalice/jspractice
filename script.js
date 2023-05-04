const body = document.querySelector("body");

const para = document.createElement("p");
para.textContent = "Hey I'm red!";
body.appendChild(para);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
body.appendChild(h3);

const div = document.createElement("div");
div.setAttribute("style", "background: pink; border: solid 10px black;")
body.appendChild(div);

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);

const paraTwo = document.createElement("p");
paraTwo.textContent = "ME TOO";
div.appendChild(paraTwo);