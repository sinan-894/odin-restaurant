export function menu(){
    const contentContainer = document.querySelector("#content");
    const title = document.createElement('div');
    const titleText = document.createElement('h1')
    titleText.textContent  = "Menu"
    titleText.classList.add('title-text','menu');
    title.appendChild(titleText)
    contentContainer.appendChild(title)
}