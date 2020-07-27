const generateContact = (() => {
    const addContact = (container) => {
        const createSection = () => {
            const formDiv = document.createElement("div");
            formDiv.classList.add("contact-div");
            const formContainer = document.createElement("form");
            formContainer.classList.add("contact-form");

            const nameDiv = document.createElement("div");
            nameDiv.classList.add("form-elemnt-div");
            const nameLabel = document.createElement("label");
            nameLabel.setAttribute("for", "nameInput");
            nameLabel.textContent = "Name: "
            const inputName = document.createElement("input");
            inputName.setAttribute("id", "nameInput");

            const emailDiv = document.createElement("div");
            emailDiv.classList.add("form-elemnt-div");
            const emailLabel = document.createElement("label");
            emailLabel.textContent = "Email: "
            emailLabel.setAttribute("for", "emailInput");
            const inputEmail = document.createElement("input");
            inputEmail.setAttribute("type", "email");
            inputEmail.setAttribute("id", "emailInput");

            const commentDiv = document.createElement("div");
            commentDiv.classList.add("form-elemnt-div");
            const comentLabel = document.createElement("label");
            comentLabel.textContent = "Coment: "
            comentLabel.setAttribute("for", "inputComent");
            const inputComment = document.createElement("textarea");
            inputComment.setAttribute("id", "inputComent")

            const sumbitBtn = document.createElement("button");
            sumbitBtn.setAttribute("type", "button");
            sumbitBtn.textContent = "Submit"

            formDiv.appendChild(formContainer);
            nameDiv.appendChild(nameLabel);
            nameDiv.appendChild(inputName);
            emailDiv.appendChild(emailLabel);
            emailDiv.appendChild(inputEmail);
            commentDiv.appendChild(comentLabel);
            commentDiv.appendChild(inputComment);
            formContainer.appendChild(nameDiv);
            formContainer.appendChild(emailDiv);
            formContainer.appendChild(commentDiv);
            formContainer.appendChild(sumbitBtn);
            container.appendChild(formDiv);
            sumbitBtn.addEventListener("click", () => alert("This is a fake page, the restaurant doesn't exist and the form doesn't work"))
        }
        createSection();
    }


    return { addContact };
})()

export { generateContact };