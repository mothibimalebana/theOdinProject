const homePage = (function (){
    const contentDiv = document.getElementById("content");
    contentDiv.appendChild(contentLeft);
    contentDiv.appendChild(contentRight);

    const contentLeft = document.createElement("div");
    contentLeft.classList.add("content-left");
    const contentRight = document.createElement("div");
    contentRight.classList.add("content-right");

    //contentLeft
    const title = document.createElement("div");
    title.classList.add("title");


})();
