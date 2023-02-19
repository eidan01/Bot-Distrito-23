const { ApplicationCommandType } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Cheque a latência do Bot :)",
  type: ApplicationCommandType.ChatInput,
  run: async (client, interaction) => {
    interaction.reply({
      content: `🏓 **Pong!**
Websocket: ${Math.round(client.ws.ping)}ms
Mensagem: ${(Date.now() - interaction.createdTimestamp) / 5 ** 1}ms`,
    });
  },
};
