const Discord = require("discord.js")

module.exports = {
  name: "help", 
  description: "Painel de comandos do bot.", 
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let embed_painel = new Discord.EmbedBuilder()
    .setColor("#2d0e8f")
    .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynmiac: true }) })
    .setDescription(`Olá ${interaction.user}, veja meus comandos interagindo com o painel abaixo:`);

    let embed_utilidade = new Discord.EmbedBuilder()
    .setColor("#2d0e8f")
    .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynmiac: true }) })
    .setDescription(`Olá ${interaction.user}, veja meus comandos de **utilidade** abaixo:`);

    let embed_diversao = new Discord.EmbedBuilder()
    .setColor("#2d0e8f")
    .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynmiac: true }) })
    .setDescription(`Olá ${interaction.user}, veja meus comandos de **diversão** abaixo:`);

    let embed_adm = new Discord.EmbedBuilder()
    .setColor(" #2d0e8f ")
    .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynmiac: true }) })
    .setDescription(`Olá ${interaction.user}, veja meus comandos de **administração** abaixo:`);

    let painel = new Discord.ActionRowBuilder().addComponents(
        new Discord.SelectMenuBuilder()
            .setCustomId("painel_help")
            .setPlaceholder("Clique aqui!")
            .addOptions(
                {
                    label: "Painel Inicial",
                    //description: "",
                    emoji: "📖",
                    value: "painel"
                },
                {
                    label: "Utilidade",
                    description: "Veja meus comandos de utilidade.",
                    emoji: "✨",
                    value: "utils"
                },
                {
                    label: "Diversão",
                    description: "Veja meus comandos de diversão.",
                    emoji: "😅",
                    value: "fun"
                },
                {
                    label: "Administração",
                    description: "Veja meus comandos de administração.",
                    emoji: "🔨",
                    value: "Admin"
                }
            )
    )

    interaction.reply({ embeds: [embed_painel], components: [painel], ephemeral: true }).then( () => {
        interaction.channel.createMessageComponentCollector().on("collect", (c) => {
            let valor = c.values[0];

            if (valor === "painel") {
                c.deferUpdate()
                interaction.editReply({ embeds: [embed_painel] })
            } else if (valor === "utils") { 
                c.deferUpdate()
                interaction.editReply({ embeds: [embed_utilidade] })
            } else if (valor === "fun") {
                c.deferUpdate()
                interaction.editReply({ embeds: [embed_diversao] })
            } else if (valor === "Admin") {
                c.deferUpdate()
                interaction.editReply({ embeds: [embed_adm] })
            }
        })
    })


    
  }
}