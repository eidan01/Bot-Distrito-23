const Discord = require("discord.js");

module.exports = {
  name: "suporte",
  description: "[ 🎲 - Utilidade ] Entre no Servidor Suporte do BOT",
  options: [],

  run: async (client, interaction) => {
    let criacao_data = parseInt(interaction.guild.createdTimestamp / 1000);
    let server_icon = interaction.guild.iconURL({ dinamyc: true });
    if (server_icon) {
      interaction.reply({
        embeds: [
          new Discord.EmbedBuilder()
            .setAuthor({
              name: interaction.guild.name,
              iconURL: interaction.guild.iconURL({ dinamyc: true }),
            })
            .setTitle(`💡 | SERVIDOR DE SUPORTE`)
            .setImage(
              "https://cdn.discordapp.com/attachments/1052339805612146709/1060256445645467669/standard.gif"
            )
            .setColor("#2d0e8f")
            .setFooter({
              text: "© Distrito 23 Bot - 2023",
              iconURL:
                "https://cdn.discordapp.com/attachments/1052339805612146709/1060256445645467669/standard.gif",
            })
            .addFields(
              {
                name: `INFORMAÇÕES DO BOT`,
                value:
                  "```Bot multiuso repleto de recursos\nSite: em breve\nDocumentos: em breve```",
                inline: true,
              },
              {
                name: `COMO TER SUPORTE?`,
                value:
                  "```Clique no Botão Abaixo\nPara Entrar no Servidor\nSuporte do Server.\nabra um ticket em \n#📂・abrir-ticket```",
                inline: true,
              }
            ),
        ],
        components: [
          new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
              .setStyle(5)
              .setLabel(`💡 | SEVIDOR SUPORTE`)
              .setURL("https://discord.gg/distrito23")
          ),
        ],
      });
    } else {
      interaction.reply({
        embeds: [
          new Discord.EmbedBuilder()
            .setImage(
              "https://cdn.discordapp.com/attachments/1052339805612146709/1060256445645467669/standard.gif"
            )
            .setTitle(`💡 | SERVIDOR DE SUPORTE`)
            .setColor("#2d0e8f")
            .addFields(
              {
                name: `INFORMAÇÕES DO BOT`,
                value:
                  "```Bot multiuso repleto de recursos\nSite: em breve\nDocumentos: em breve```",
                inline: true,
              },
              {
                name: `COMO TER SUPORTE?`,
                value:
                  "```Clique no Botão Abaixo\nPara Entrar no Servidor\nSuporte do Server.```",
                inline: true,
              }
            ),
        ],
      });
    }
  },
};
