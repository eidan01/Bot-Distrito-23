let Discord = require('discord.js')

module.exports = {
    name: "hack",
    description: "Comando para hackear alguém",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "pessoa",
            description: "Menciona quem quer hackear",
            type: Discord.ApplicationCommandOptionType.User,
            required: true,
        }
    ],

    run: async (client, interaction) => {
        let email = [
           'ghhhh@gmail.com',
           '1234@tk.env' // gui so copiar isso e adicionar em baixo varios
        ]

        let senha = [
            'paocomatum321',
            'amooflamengo' // gui so copiar isso e adicionar em baixo varios
        ]

        let mail = email[Math.floor(Math.random() * email.length)]
        let password = senha[Math.floor(Math.random() * senha.length)]
        let pessoa = interaction.options.getUser('pessoa')

        let aguarde = new Discord.EmbedBuilder()
        .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setDescription(`**Vítima:** \`Hackeando...\`
        **ID:** \`Hackeando...\`
        **Email:** \`Hackeando...\`
        **Senha:** \`Hackeando...\``)
        .setTimestamp()
        .setThumbnail(pessoa.displayAvatarURL()) 
        .setColor('#f54eea')

        let embed = new Discord.EmbedBuilder()
        .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setDescription(`**Vítima:** ${pessoa}
        **ID:** \`${pessoa.id}\`
        **Email:** \`${mail}\`
        **Senha:** \`${password}\``)
        .setTimestamp()
        .setThumbnail(pessoa.displayAvatarURL()) 
        .setColor('#f54eea')

        interaction.reply({embeds: [aguarde]}).then(() => {
            setTimeout(() => {
                interaction.editReply({embeds: [embed]})
            }, 4000)
        })



    }
}