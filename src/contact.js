import imageCarmy from "./CarmyPromo.jpg"
import imageSydney from "./Sydney.jpg"
import imageRichie from "./Richie.jpg"



export function contact(){
    const contentContainer = document.querySelector("#content");
    const title = document.createElement('div');
    title.classList.add('contact-title')
    const titleText = document.createElement('h1')
    titleText.textContent  = "contact"
    titleText.classList.add('title-text','contact');
    title.appendChild(titleText)
    contentContainer.appendChild(title)

    contentContainer.appendChild(contactContainer)
}


const contactInfo = {
    carmy : ["Carmen Berzatto",'Chef and Owner of The Bear',imageCarmy],
    sydney : ["Sydney Adamu","Chef de Cuisine at The Bear",imageSydney],
    richie : ["Richard Jerimovich","Maître D'hôtel at The Bear",imageRichie]
}


const contactContainer = (()=>{
    const arrayStaff = ['carmy','sydney','richie']

    const contact = document.createElement('div')
    contact.classList.add('contact-div')

    let imageLeftTextRight = false 
    arrayStaff.forEach((staff)=>{
        let contactItem = document.createElement("section");
        contactItem.classList.add('contact-item')
        let [staffName,staffRole,staffImage] = contactInfo[staff];
        let contactInfoText = document.createElement('section')
        contactInfoText.classList.add('text-section',staff);
        let contactName = document.createElement('h4');
        contactName.textContent = staffName;
        let contactRole = document.createElement('p');
        contactRole.textContent = staffRole;
        contactInfoText.appendChild(contactName);
        contactInfoText.appendChild(contactRole);

        let contactInfoImage = document.createElement('img');
        contactInfoImage.src = staffImage;

        if (imageLeftTextRight){
            contactItem.appendChild(contactInfoImage)
            contactItem.appendChild(contactInfoText)
            imageLeftTextRight = false
        }
        else{
            contactItem.appendChild(contactInfoText)
            contactItem.appendChild(contactInfoImage)
            imageLeftTextRight = true
        }
        contact.appendChild(contactItem)


    })
    

    return contact





})()

