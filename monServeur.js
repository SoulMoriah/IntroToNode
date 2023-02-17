const http = require('http');
const fs = require('fs');
const uuid=require("uuid");

const serveur = http.createServer((requete, reponse)=>{
    console.log(uuid.v4());

    //Definition de l'en-tete
    reponse.setHeader("content-type","text/html");

    //definition de la reponse selon la demande
    let fichier ="";
    if(requete.url==="/acceuil"){
        fichier ='./IHM/acceuil.html';
    }else if(requete.url==="/profil"){
        fichier ='./IHM/profile.html';
    }else{
        fichier ='./IHM/erreur.html';
    }
    // Lecture du fichier html et envoie de la reponse
    //reponse.end()
    fs.readFile(fichier,(erreur,donnee)=>{
        if (erreur) {
            console.log(erreur);
            reponse.end();
        }else{
            //reponse.write(donnee);
            reponse.end(donnee);
        }
    })
});

serveur.listen(3001,"localhost", ()=>{
    console.log("Pret a effectuer les requete");
})