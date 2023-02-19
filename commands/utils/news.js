const Discord = require("discord.js");
const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ApplicationCommandType,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  name: "news",
  description: "｢Utilidades｣ Veja as novidades e atualizações do Bot.",
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    const embed = new Discord.EmbedBuilder()
      .setTitle(`Atualizações ${client.user.tag}`)
      .setColor("Green")
      .setDescription(
        `👋 Olá ${interaction.user},\n\nVocê deseja saber minhas últimas notícias e novidades certo? Então continue lendo.\n\nFui atualizado recentemente (18/02/2023) e todos meus comandos foram Modificados, Alterados, Melhorados e etc.\n\nAtualmente estou apenas respondendo aos comandos em Slash(/).\n\nUtilize /ajuda para ver meus comandos. Caso meus comandos em Slash não estejam aparecendo ou estão indisponíveis, me adicione novamente no servidor clicando abaixo!`
      )
      .setTimestamp();

    const ButtonNews = new ActionRowBuilder().addComponents([
      new ButtonBuilder()
        .setEmoji("🌐")
        .setLabel("Convite")
        .setURL(
          `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=applications.commands%20bot`
        )
        .setStyle(ButtonStyle.Link),
    ]);

    interaction.reply({ embeds: [embed], components: [ButtonNews] });
  },
};
