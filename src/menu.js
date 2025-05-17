import CB from './the-bear-chocolate-banana.jpg'
import MC from './the-bear-mikey-cannoli.jpg'
import CD from './the-bear-cherry-donut.jpg'
import CS from './copenhagen-sundae-the-bear.jpg'
import BO from './the-bear-omelette.jpg'

import menuIntroCarm from "./carmy-kitchen.jpeg"
import menuIntroLadies from "./chef.jpeg"
import menuIntroDessert from "./dessert-guy.jpeg"




export function menu(){
    const contentContainer = document.querySelector("#content");
    const title = document.createElement('div');
    title.classList.add('menu-title-div')
    const titleText = document.createElement('h1')
    titleText.textContent  = "Menu"
    titleText.classList.add('title-text','menu');
    title.appendChild(titleText)
    const titleImageSection =  document.createElement('section');
    titleImageSection.classList.add('title-image');
    const image1 =  document.createElement('img');
    image1.src = menuIntroCarm;
    const image2 =  document.createElement('img');
    image2.src = menuIntroLadies;
    const image3 =  document.createElement('img');
    image3.src = menuIntroDessert;
    titleImageSection.appendChild(image1);
    titleImageSection.appendChild(image2);
    titleImageSection.appendChild(image3);

    title.appendChild(titleImageSection);


    contentContainer.appendChild(title)
    contentContainer.appendChild(MenuContainer)
}


const MenuContainer = (()=>{
    const foodNameAndImagePathArray = [
        ["The Chocolate Banana",CB],
        ["Cherry Donut",CD],
        ["Copenhagen Sundae",CS],
        ['"The Michael" Cannoli',MC],
        ["Boursin Omelette With Sour Cream Potato Chips",BO]
    ]

    const menu = document.createElement('div');
    menu.classList.add('menu-div');

    foodNameAndImagePathArray.forEach(([foodName,foodImageFilePath])=>{
        let foodSection = document.createElement('section');
        foodSection.classList.add('menu-item');
        let foodTitle  = document.createElement('h3');
        foodTitle.textContent = foodName;
        let foodImage = document.createElement('img');
        foodImage.src = foodImageFilePath;

        foodSection.appendChild(foodTitle);
        foodSection.appendChild(foodImage);
        menu.appendChild(foodSection);
    })

    return menu

    }  
)()