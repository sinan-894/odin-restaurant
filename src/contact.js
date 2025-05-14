export function contact(){
    const contentContainer = document.querySelector("#content");
    const title = document.createElement('div');
    const titleText = document.createElement('h1')
    titleText.textContent  = "contact"
    titleText.classList.add('title-text','contact');
    title.appendChild(titleText)
    contentContainer.appendChild(title)
}