import { generateContact } from "./contactGenerator.js";
import { generateMenu } from "./menuGenerator.js"
import { generateHome } from "./homeGenerator.js"

generateHome.addHome(document.getElementById("content"));

const addEvents = (() => {
    const _cacheHTML = (() => {
        const mainBtn = document.getElementById("home-tab");
        const menuBtn = document.getElementById("menu-tab");
        const contactBtn = document.getElementById("contact-tab");
        const container = document.getElementById("content");
        return { mainBtn, menuBtn, contactBtn, container }
    })()
    _cacheHTML.menuBtn.addEventListener("change", (e) => {
        if (!e.target.cheked) {
            _cacheHTML.container.innerHTML = "";
            generateMenu.addMenu(_cacheHTML.container);
        }

    })
    _cacheHTML.mainBtn.addEventListener("change", (e) => {
        if (!e.target.cheked) {
            _cacheHTML.container.innerHTML = "";
            generateHome.addHome(_cacheHTML.container);
        }

    })
    _cacheHTML.contactBtn.addEventListener("change", (e) => {
        if (!e.target.cheked) {
            _cacheHTML.container.innerHTML = "";
            generateContact.addContact(_cacheHTML.container);
        }

    })

})()