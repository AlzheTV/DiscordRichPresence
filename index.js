var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Projet en cours 😅🦾", // Un petit message ?
assets : {
large_image : "acorp", // Le nom de l'asset qui servira de logo !
large_text : "www.alzhecorporation.fr"}, // Un petit tooltip quand on met la souris sur ton image !
buttons : [{label: "Hébergeur 🌐", url: "https://alzhe.tv/"}, {label: "Discord 🎧", url: "http://alzhecorporation.fr/"}] // Liens ! 2 max !
}
})
})
client.login({ clientId : "792946690185101333" }).catch(console.error); // Client ID à fournir obligatoirement, sinon c'est mon projet que vous allez promouvoir !
// Gros big up à DataHosting (datahosting.fr) ou @Data_Hosting sur Twitter ! 🖤
