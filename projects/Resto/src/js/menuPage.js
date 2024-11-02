import '../css/menuPage.css';

export const menuPage = function(){
    const contentDiv = document.getElementById("content");

    //div:title
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
        //header:
        const titleHeader = document.createElement("div");
        titleHeader.classList.add("header");
        titleHeader.textContent = 'Menu';
        titleDiv.appendChild(titleHeader);
        //subheader:
        const titleSubHeader = document.createElement("div");
        titleSubHeader.classList.add("subheader");
        titleSubHeader.textContent = 'From The House';
        titleDiv.appendChild(titleSubHeader);
    contentDiv.appendChild(titleDiv);

}