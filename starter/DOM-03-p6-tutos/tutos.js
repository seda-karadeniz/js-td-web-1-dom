// 03-DOM : MODIFIEZ LA STRUCTURE DE LA PAGE
/*
DOM - PREPA 6 : « Tutos » : construire une liste de tutos JavaScript
Vous disposez d’un fichier HTML qui contient une nav.
1. Créer un objet tutos qui contient les tutoriels JavaScript suivants :
	- Openclassrooms : Apprenez à coder avec JavaScript : https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript
	- Openclassrooms : Créez des pages web interactives avec JavaScript : https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/
	- Udemy : The Complete JavaScript Course 2019 : Build Real Projects! sur UDEMY : https://www.udemy.com/course/the-complete-javascript-course/
2. Parcourir cet objet pour récupérer ces infos afin d’afficher un menu créé dynamiquement dans la page Web :
	- Le titre du menu (créé dynamiquement avec JS) est « Mes tutos JavaScript »
	- Le libellé du lien est à chaque fois le texte qui précède le lien dans l’objet tutos
	- Pour chaque item, le lien mène vers l’adresse mentionnée dans l'objet tutos
	- Pour chaque lien, prévoyez un title (« Vers le site de … »,
		avec le texte qui précède le lien dans l’énoncé ci-dessus)
AIDE : Utilisez une boucle for/in pour parcourir l'objet tutos
*/
class Tutos {
	constructor(libelle,lien){
		this.titre = "Mes tutos JavaScript";
		this.libelle = libelle;
		this.lien = lien;
	}
	decrire(){
		return 	`${this.titre} ${this.libelle} ${this.lien}`;
	}
}

const ocr1 = new Tutos("Apprenez à coder avec JavaScript", "https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript");
const ocr2 = new Tutos("Créez des pages web interactives avec JavaScript","https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/")
const udemy = new Tutos("Build Real Projects! sur UDEMY", "https://www.udemy.com/course/the-complete-javascript-course/");

console.log(`${ocr1.decrire()}\n${ocr2.decrire()}\n${udemy.decrire()}`);

document.querySelector("nav").insertAdjacentHTML("beforeend",ocr1.decrire());
document.querySelector("nav").insertAdjacentHTML("beforeend",ocr2.decrire());
document.querySelector("nav").insertAdjacentHTML("beforeend",udemy.decrire());



/*   const compte = new CompteBancaire("Seda");
  const compteV = new CompteBancaire("valentine");
  
  console.log(compte, compteV);
  
  compteV.crediter(500); /* appel de mehtode en appl de l'objet */

  /* console.log(compteV.toString());
  
  compte.debiter(500);
  console.log(compte.toString());  */
  /* 
  en resumer 
  les class servent a cree des objet qui on les mm proprieter mais pas les mm valeur
  this = mot clé qui designe l'objet courant dans lequel on est 
  new = permet de dire qu'il aimerai avoir un objet de la classe compte bancaire 
  
  */



/* 

const tutos={
	
		titre : "Mes tutos JavaScript",
		libelle : ["Apprenez à coder avec JavaScript", "Créez des pages web interactives avec JavaScript","Build Real Projects! sur UDEMY" ],
		lien : ["https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript","https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/","https://www.udemy.com/course/the-complete-javascript-course/"]
}


for (const tuto in tutos) {
  console.log(`${tuto}: ${tutos[tuto]}`);
} */

/* document.querySelector("nav").insertAdjacentHTML("beforeend",tutos); */

/* 
const tutos = [
	{
		titre : "Mes tutos JavaScript",	
	},
    {
        libelle : "Apprenez à coder avec JavaScript",
        lien: "https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript"
    },
    {
        libelle: "Créez des pages web interactives avec JavaScript",
        lien:"https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/"
    },
    {
        libelle:"Build Real Projects! sur UDEMY" ,
        lien:"https://www.udemy.com/course/the-complete-javascript-course/"
    }
];
for (const tuto in tutos) {
	console.log(document.querySelector("nav").insertAdjacentHTML("beforeend",tutos[tuto]));
  }

 */




 