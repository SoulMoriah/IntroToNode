const express = require('express')
const app = express()
const morgan = require('morgan')

// Ressources statics
app.use(express.static('public'))

app.use(morgan('dev'))

app.use((req,res, next)=>{
    console.log("Requete effectuée : "+ Date().toString());
    next();
});

app.get("/acceuil", (req, res) => {
    res.status(200).sendFile("IHM/acceuil.html", { root: __dirname });
});

app.get("/profile", (req, res) => {
    res.status(200).sendFile("IHM/profile.html", { root: __dirname });
});

app.get("/", (req, res) => {
    res.status(300).redirect("/acceuil");
});

app.use((req, res)=>{
    res.status(404).sendFile("IHM/erreur.html", { root: __dirname });
})

app.listen(3001, ()=>{
    console.log('en attente des requete au port 3001');
});
console.log('Erreur lors de la creation du serveur');