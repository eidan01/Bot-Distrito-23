const Discord = require("discord.js");

module.exports = {
  name: "say",
  description: "Mande uma mensagem ",
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
      name: "mensagem",
      description: "Mensagem que será enviada",
      type: Discord.ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: "user",
      description: "Escreve um nome qualquer",
      type: Discord.ApplicationCommandOptionType.String,
      required: false,
    },
    {
      name: "imagem",
      description: "Escreve o link da imagem desejada",
      type: Discord.ApplicationCommandOptionType.String,
      required: false,
    },
  ],
  run: (client, interaction) => {
    let mensagem = interaction.options.getString("mensagem");
    let user = interaction.options.getString("user");
    let imagem = interaction.options.getString("imagem");
    let canal = interaction.channel;

    if (user === null) user = interaction.user.username;

    if (imagem === null) {
      imagem = interaction.user.displayAvatarURL({
        dynamic: true,
        format: "png",
      });
    } else {
      const linkCheck = /https?:\/\/.+\.(?:png|jpg|jpeg|gif|webp)/gi;
      if (!linkCheck.test(imagem))
        return interaction.reply({
          content: "❌ | Não foi possivel mandar a mensagem...",
          ephemeral: true,
        });
    }
    interaction
      .reply({ content: `Sua mensagem foi enviada!`, ephemeral: true })
      .then(() => {
        canal
          .createWebhook({
            name: user,
            avatar: (`https://cdn.discordapp.com/attachments/1052339805612146709/1060256445645467669/standard.gif`),
          })
          .then((web) => {
            web.send(`${mensagem}`).then(() => {
              web.delete();
            });
          });
      });
  },
};
