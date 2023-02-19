const Discord = require("discord.js");

module.exports = {
  name: "roletarussa",
  description: "Comando para jogares roleta russa",
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction, args) => {
    const numero = Math.floor(Math.random() * 11);

    const embed1 = new Discord.EmbedBuilder()
      .setAuthor({
        name: interaction.user.username,
        iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
      })
      .setColor("#f54eea")
      .setDescription(
        `${interaction.user} pegaste o revolver e apertaste o gatilho...`
      )
      .setTimestamp();

    if (numero >= 5) {
      const embed2 = new Discord.EmbedBuilder()
        .setAuthor({
          name: interaction.user.username,
          iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
        })
        .setColor("#FF0000") //código hex vermelho
        .setDescription(
          `${interaction.user} infelizmente acabaste por morrer...`
        )
        .setTimestamp();

      interaction.reply({ embeds: [embed1] }).then(() => {
        setTimeout(() => {
          interaction.editReply({ embeds: [embed2] });
        }, 3000);
      });
    } else {
      const embed3 = new Discord.EmbedBuilder()
        .setAuthor({
          name: interaction.user.username,
          iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
        })
        .setColor("#00FF00") //código hex verde
        .setDescription(`${interaction.user} felizmente sobreviveste`)
        .setTimestamp();

      interaction.reply({ embeds: [embed1] }).then(() => {
        setTimeout(() => {
          interaction.editReply({ embeds: [embed3] });
        }, 3000);
      });
    }
  },
};
