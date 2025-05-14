import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

export  function initPageLoad(){

    const header = document.createElement('header');
    const nav = document.createElement("nav");
    const navButtonsArray = ['Home','Menu','Contact'];
    navButtonsArray.forEach((buttonName)=>{
        let navButton = document.createElement('button');

        navButton.addEventListener('click',()=>{
            const container = document.querySelector("#content");
            container.innerHTML = ""
            if (buttonName=='Home'){
                home()
            }
            else if (buttonName=='Menu'){
                menu()
            }
            else if (buttonName=='Contact'){
                contact()
            }
        })


        nav.appendChild(navButton);
        navButton.id = buttonName
        navButton.textContent = buttonName
        navButton.classList.add('nav-button')
    })
    header.appendChild(nav)
    document.body.appendChild(header)

    const contentDiv = document.createElement('div')
    contentDiv.id  = 'content'
    document.body.appendChild(contentDiv)

}

