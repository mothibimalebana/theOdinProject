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
    const titleH4 = document.createElement("h4");
    const titleSpan = document.createElement("span");
    titleH4.textContent = 'vegan food';
    titleSpan.style.color = '#2A9D8F';
    titleH4.appendChild(titleSpan);
    title.appendChild(titleH4);
    contentLeft.appendChild(title)
    //contentLeft:button


}

export {homePage}