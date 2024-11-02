import koreanDish from '../img/korean-dish.png';
import '../css/styles.css'

const homePage = function (){
    const contentDiv = document.getElementById("content");

    //creating contentLeft and contentRight
    const contentLeft = document.createElement("div");
    contentLeft.classList.add("content-left");
    const contentRight = document.createElement("div");
    contentRight.classList.add("content-right");

    //appending conftentLeft and contentRight to contentDiv
    contentDiv.appendChild(contentLeft);
    contentDiv.appendChild(contentRight);

    //contentLeft
    //contentLeft:title
    const title = document.createElement("div");
    title.classList.add("title");
    const titleH4 = document.createElement("h4"); //inside the titleDiv, there is an H4 element
    titleH4.textContent = "Home made healthy, "
    const titleSpan = document.createElement("span");
    titleSpan.textContent = 'vegan food';
    titleSpan.style.color = '#2A9D8F';
    titleH4.appendChild(titleSpan);
    title.appendChild(titleH4);
    contentLeft.appendChild(title)
    
    //contentLeft:button
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("button");
    const buttonLeft = document.createElement("button");
    buttonLeft.textContent = "View Menu";
    buttonLeft.id = "buttonLeft";
    buttonDiv.appendChild(buttonLeft);
    const buttonRight = document.createElement("button");
    buttonRight.textContent = "Local Nearby";
    buttonDiv.appendChild(buttonRight);
    contentLeft.appendChild(buttonDiv);

    //contentRight
    const imgDiv = document.createElement("img");
    const imgRight = new Image();
    imgRight.src = koreanDish;
    imgDiv.appendChild(imgRight);
    contentRight.appendChild(imgRight);
}

export {homePage}