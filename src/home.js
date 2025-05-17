import bearFrontImage from "./bear-front.jpeg" 


export function home(){
    const contentContainer = document.querySelector("#content");
    const title = document.createElement('div');
    title.classList.add('title-div')
    const titleText = document.createElement('p')
    titleText.textContent  = "The Bear"
    titleText.classList.add('title-text');
    title.appendChild(titleText)
    const titleImage = document.createElement('img');
    titleImage.src = bearFrontImage;
    title.appendChild(titleImage);


    const paragraphContainer = document.createElement('div');
    const aboutUs =  document.createElement('section');
    const aboutUsText = document.createElement('p');
    aboutUsText.textContent = "A far cry from its sticky days as The Beef, Chef Carmy Berzatto’s renovated restaurant features gorgeous dishes — just ignore those noises from the kitchen!"
    aboutUs.appendChild(aboutUsText)
    const hours =  document.createElement('section');
    const hoursTitle = document.createElement('h3');
    hoursTitle.textContent = 'Hours'
    const hoursText = document.createElement("p")
    hoursText.innerHTML =" Sunday: 8am - 8pm<br>Monday: 6am - 6pm<br>Tuesday: 6am - 6pm<br>Wednesday: 6am - 6pm<br>Thursday: 6am - 10pm<br>Friday: 6am - 10pm<br>Saturday: 8am - 10pm"
    hours.appendChild(hoursTitle)
    hours.appendChild(hoursText)
    const location =  document.createElement('section');
    const locationTitle = document.createElement('h3');
    locationTitle.textContent = 'Location'
    const locationText = document.createElement("p")
    locationText.textContent = "123 Forest Drive, Forestville, Maine"
    location.appendChild(locationTitle)
    location.appendChild(locationText)
    paragraphContainer.appendChild(aboutUs)
    paragraphContainer.appendChild(hours)
    paragraphContainer.appendChild(location)

    contentContainer.appendChild(title)
    contentContainer.appendChild(paragraphContainer)

}