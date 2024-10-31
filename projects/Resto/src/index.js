import './css/styles.css';

const mainPage = (function () {
    const content = document.getElementById("content");
    const getContent = () => content;

    return{getContent}
})();
