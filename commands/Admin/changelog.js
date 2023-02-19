const Discord = require("discord.js");

module.exports = {
  name: "changelog",
  description: "Faça uma atualização de ChangeLog",
  type: Discord.ApplicationCommandType.ChatInput,
  registerType: "GLOBAL",
  options: [
    {
      name: "versão",
      description: "📢 Versão da ChangeLog:",
      type: Discord.ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: "changelog",
      description: "📢 Atualizações:",
      type: Discord.ApplicationCommandOptionType.String,
      required: true,
    },
  ],

  run: async (client, interaction) => {
    if (
      !interaction.member.permissions.has(
        Discord.PermissionFlagsBits.Administrator
      )
    ) {
      interaction.reply({
        content: "❌ | Você não tem permissão para utilizar esse comando.",
        ephemeral: true,
      });
    } else {
      let versao = interaction.options.getString("versão");
      let changelog = interaction.options.getString("changelog");

      let aviso_embed = new Discord.EmbedBuilder()
        .setDescription(`${versao}\n\n${changelog}`)
        .setColor("#dfdfdf")
        .setImage(
          "https://cdn.discordapp.com/attachments/1052339805612146709/1060256445246996601/standard_1.gif"
        );

      await interaction.channel.send({ embeds: [aviso_embed] });
      await interaction.reply({
        content: "Você atualizou a ChangeLog com sucesso.",
        ephemeral: true,
      });
    }
  },
};
