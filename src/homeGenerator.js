const generateHome = (() => {
    const addHome = (container) => {

        const createSection = (() => {
            const sectionContainer = document.createElement("div");
            sectionContainer.classList.add("homeContainer");
            const title = document.createElement("h2");
            title.textContent = "ABOUT US";
            sectionContainer.appendChild(title);
            const aboutContainer = document.createElement("div");
            aboutContainer.classList.add("about-container");
            const imgMain = document.createElement("img");
            imgMain.setAttribute("src", "https://cuk-it.com/wp-content/uploads/2020/05/thumb02-1-1024x576.jpg");
            imgMain.classList.add("img-portada");
            aboutContainer.appendChild(imgMain);
            const mainArticle = document.createElement("p");
            mainArticle.textContent = "'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.''Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'";
            mainArticle.classList.add("about-description");
            aboutContainer.appendChild(mainArticle);
            sectionContainer.appendChild(aboutContainer)
            container.appendChild(sectionContainer);

        })()

    }


    return { addHome }

})()

export { generateHome };