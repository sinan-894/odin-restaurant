import bearFrontImage from "./bear-front.jpeg"
import bearStaffImage from "./bear-staff.jpg" 


export function home(){
    const contentContainer = document.querySelector("#content");
    const title = document.createElement('div');
    title.classList.add('title-div')
    const titleText = document.createElement('p')
    titleText.textContent  = "The Bear"
    titleText.classList.add('title-text-main');
    title.appendChild(titleText)
    const titleImage = document.createElement('img');
    titleImage.src = bearFrontImage;
    title.appendChild(titleImage);


    const paragraphContainer = document.createElement('div');
    const aboutUs =  document.createElement('section');
    aboutUs.classList.add('section-paragraph');
    const aboutUsText = document.createElement('p');
    aboutUsText.textContent = "A far cry from its sticky days as The Beef, Chef Carmy Berzatto’s renovated restaurant features gorgeous dishes — just ignore those noises from the kitchen!"
    aboutUs.appendChild(aboutUsText);
    const aboutUsImage = document.createElement('img');
    aboutUsImage.src = bearStaffImage;
    aboutUs.appendChild(aboutUsImage);

    const location =  document.createElement('section');
    location.classList.add('section-location');
    const locationTitle = document.createElement('h3');
    locationTitle.textContent = 'Location'
    const locationText = document.createElement("p")
    locationText.textContent = "Fulton Market District,Chicago,U.S.A"
    location.appendChild(locationTitle)
    location.appendChild(locationText)
    paragraphContainer.appendChild(aboutUs)
    paragraphContainer.appendChild(location)

    contentContainer.appendChild(title)
    contentContainer.appendChild(paragraphContainer)

}