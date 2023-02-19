const { ChannelType } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "server",
  description: "subcommand de server",
  options: [
    {
      name: "info",
      description: "Displays important information about the server.",
      type: Discord.ApplicationCommandOptionType.Subcommand,
    },
  ],
  run: async (client, interaction) => {
    switch (interaction.options.getSubcommand()) {
      case "info": {
        let owner_id = interaction.guild.ownerId;
        let owner = interaction.guild.members.cache.get(owner_id);
        let members = interaction.guild.memberCount;
        let roles = interaction.guild.roles.cache.size;
        let channels = interaction.guild.channels.cache.size;
        let server = interaction.guild;
        let text = interaction.guild.channels.cache.filter(
          (a) => a.type === ChannelType.GuildText
        ).size;
        let voice = interaction.guild.channels.cache.filter(
          (a) => a.type === ChannelType.GuildVoice
        ).size;
        let category = interaction.guild.channels.cache.filter(
          (a) => a.type === ChannelType.GuildCategory
        ).size;
        let forum = interaction.guild.channels.cache.filter(
          (a) => a.type === ChannelType.GuildForum
        ).size;
        let staticEmoji = interaction.guild.emojis.cache.filter(
          (e) => !e.animated
        ).size;
        let animatedEmoji = interaction.guild.emojis.cache.filter(
          (e) => e.animated
        ).size;
        let emojis = interaction.guild.emojis.cache.size;
        let boosts = interaction.guild.premiumSubscriptionCount;
        let createdDate = interaction.guild.createdAt.toLocaleDateString("eng");
        let serverIcon = interaction.guild.iconURL({ dynamic: true });
        let serverRegion = interaction.guildLocale;
        let verfLevel = interaction.guild.verificationLevel;
        let levelBoost = server.premiumSubscriptionCount;

        if (!serverIcon) {
          serverIcon = "";
        }

        let EmbedInfo = new Discord.EmbedBuilder()
          .setThumbnail(`${server.iconURL({ dynamic: true })}`)
          .setTitle(`${server.name}`)
          .setDescription(
            `**ID**: ${server.id}\n**Dono**: ${owner}\n**Criado em**: ${createdDate}`
          )
          .addFields(
            {
              name: "Região",
              value: `${serverRegion}`,
              inline: false,
            },
            {
              name: "Verificação",
              value: `level ${verfLevel}`,
              inline: false,
            },
            {
              name: "Quantidade de Membros",
              value: `${members}`,
              inline: false,
            },
            {
              name: "Boosts",
              value: `${boosts} boosts`,
              inline: false,
            },
            {
              name: "Cargos",
              value: `${roles} cargos`,
              inline: false,
            },
            {
              name: "Canais",
              value: `Texto: ${text}\nVoz: ${voice}\nCategoria: ${category}\nForum: ${forum}\nTotal: ${channels}`,
              inline: false,
            },
            {
              name: "Emojis",
              value: `normais: ${staticEmoji}\nAnimados: ${animatedEmoji}\nTotal: ${emojis}`,
              inline: false,
            }
          );

        interaction.reply({ embeds: [EmbedInfo] });

        break;
      }
    }
  },
};
