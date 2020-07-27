const generateMenu = (() => {
    const addMenu = (container) => {

        const createElements = function (aTitle, imgSrc, arrOptions) {
            const sectionContainer = document.createElement("div");
            sectionContainer.classList.add("section-container");
            const divTitle = document.createElement("div");
            divTitle.classList.add("title-container");
            const textTitle = document.createElement("h3");
            textTitle.textContent = aTitle;
            const imgTitle = document.createElement("img");
            imgTitle.setAttribute("src", imgSrc);
            imgTitle.classList.add("crop");
            divTitle.appendChild(textTitle);
            divTitle.appendChild(imgTitle);
            const ulOptions = document.createElement("ul");
            arrOptions.forEach(element => {
                let li = document.createElement("li")
                li.textContent = element;
                ulOptions.appendChild(li);
            });
            sectionContainer.appendChild(divTitle);
            sectionContainer.appendChild(ulOptions);
            return sectionContainer
        }
        const createSection = (() => {

            const menuContainer = document.createElement("div");
            menuContainer.classList.add("menu-container");
            menuContainer.appendChild(createElements("Dinner", "https://upload.wikimedia.org/wikipedia/commons/7/78/Empanadas_argentinas_2017.jpg", ["Empanada", "Pizza"]))
            menuContainer.appendChild(createElements("Drinks", "https://p0.pikist.com/photos/360/991/wine-red-wine-portugal-reserve-drinks-cheers-wine-tasting-winemakers-wineyard.jpg", ["Wine", "Fernet"]))
            menuContainer.appendChild(createElements("Dessert", "https://cdn.pixabay.com/photo/2020/02/05/14/12/dessert-4821307_960_720.jpg", ["Alfajor", "Vigilante", "Torta"]))
            container.appendChild(menuContainer);


        })()




    }

    return { addMenu }
})()

export { generateMenu }