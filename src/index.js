



const header = document.createElement('header');
const nav = document.createElement("nav");
const navButtonsArray = ['Head','Menu','About'];
navButtonsArray.forEach((buttonName)=>{
    let navButton = document.createElement('button');
    nav.appendChild(navButton);
    navButton.id = buttonName
    navButton.textContent = buttonName
    navButton.classList.add(buttonName,'nav-button')
})
header.appendChild(nav)
document.body.appendChild(header)