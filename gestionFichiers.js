const fs = require('fs');

//Gestion des dossiers

// // Suppression de fichier et creation
// if(fs.existsSync('./mesFichiers')){
//     fs.rmdir('./mesFichiers', (erreur)=>{
//         if (erreur) {
//             console.log(erreur);
//         }else{
//             console.log('Dossiers supprimer avec succes');
//         }
//     })
// }else{

//     fs.mkdir('./mesFichiers',(erreur)=>{
//         if(erreur){
//             console.log(erreur);
//         }else{
//             console.log('Dossier Créé avec succes!');
//         }
//     })
// }

// // Creation de fichier
// fs.writeFile('./mesFichiers/fichier1.txt','BOBOBOB Je developpe en NodeJs',()=>{
//     console.log('Creation du fichier avec succes');
// })

// //Lecture d'un fichier
// fs.readFile('./mesFichiers/fichier1.txt', (erreur, donnee)=>{
//     if (erreur) {
//         console.log(erreur);
//     }else{
//         console.log(donnee.toString());
//     }
// })

// Suppression d'un fichier
if(fs.existsSync('./mesFichiers/fichier1.txt')){
    fs.unlink('./mesFichiers/fichier1.txt', (erreur)=>{
        if (erreur) {
            console.log(erreur);
        }else{
            console.log('Fichier supprimé avec succes!');
        }
    })
}else{
    console.log("inpossible d supp un fichier qui n'existe pas");
}