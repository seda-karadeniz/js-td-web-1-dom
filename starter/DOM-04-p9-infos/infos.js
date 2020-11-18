// 04-DOM : DONNEZ DU STYLE À VOS ÉLÉMENTS
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 9 : « Infos » : informations sur un élément
Récupérez la largeur et la hauteur de la section d'id "contenu"
et affichez les deux informations dans une liste
(un item pour la largeur et un item pour la hauteur)
que vous insérez dnas la section d'id "infos" après le titre
*/

const theElement = getComputedStyle(document.querySelector("#contenu"));
const list = document.createElement("ul");
const longueur = document.createElement("li");
longueur.textContent ="longueur : "+ theElement.width;
const hauteur = document.createElement("li");
hauteur.textContent = "hauteur : "+ theElement.height;
list.appendChild(longueur);
list.appendChild(hauteur);
document.querySelector("#infos").appendChild(list);

