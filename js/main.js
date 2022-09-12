
const menu = [
    {"id": 0, "name": "Home", "pageLink": "/home"},
    {"id": 1, "name": "About", "pageLink": "/home"},
    {"id": 2, "name": "Contact", "pageLink": "/home"},
    {"id": 3, "name": "Servies", "pageLink": "/home"},
    {"id": 4, "name": "Products", "pageLink": "/home"},
    {"id": 5, "name": "Login", "pageLink": "/home"},
    {"id": 6, "name": "Sign Up", "pageLink": "/home"},
    {"id": 7, "name": "Account", "pageLink": "/home"},
    {"id": 8, "name": "Setting", "pageLink": "/home"}
    
];

 

const listMenu = document.createDocumentFragment(); 
for (let x in menu){
    const li = 
    document.createElement("li");
    li.textContent = menu[x].name;
    listMenu.appendChild(li);
}
document.querySelector(".menu").appendChild(listMenu);

// // for ( let i = 0; i < textItem.length; i++) {
// //     console.log(textItem[1]);
// //    }
// listing.appendChild(textItem); 
// document.querySelector(".menu").appendChild(listing);

