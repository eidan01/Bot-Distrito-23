const discord = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "site",
  category: "comando",
  description: "Comando",
  run: async (client, message, args) => {

    // Verifique o status do site
    fetch('https://example.com')
      .then(res => {
        // Verifique se o site está online
        if (res.status === 200) {
          // O site está online, execute o comando
          // ...
        
          // Coloque o seu comando aqui dentro
        } else {
          // O site está offline, envie uma mensagem de erro
          message.reply('O site está offline no momento, o comando não pode ser executado.');
        }
      })
      .catch(console.error);
  





    
    
  }
}