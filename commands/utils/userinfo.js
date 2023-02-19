const {
  EmbedBuilder,
  ApplicationCommandOptionType,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  ComponentType,
} = require("discord.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
  name: "user-info",
  description: "🦉 | Permite ver as informações de um usuário",
  options: [
    {
      name: "usuario",
      description: "usuario a ver as informações",
      type: ApplicationCommandOptionType.User,
      required: true,
    },
  ],

  run: async (client, interaction) => {
    const usuarioTest =
      interaction.options.getUser("usuario") || interaction.user;
    const acharUser = interaction.guild.members.cache.get(usuarioTest.id);

    const permsObj = {
      CreateInstantInvite: "`Criar convite instantâneo`",
      KickMembers: "`Expulsar membros`",
      BanMembers: "`Banir membros`",
      Administrator: "`Administrador`",
      ManageChannels: "`Gerenciar canais`",
      ManageGuild: "`Gerenciar servidor`",
      AddReactions: "`Adicionar reações`",
      ViewAuditLog: "`Ver registro de auditoria`",
      PrioritySpeaker: "`Voz Prioritária`",
      Stream: "`Ao vivo`",
      ViewChannel: "`Ver canais`",
      SendMessages: "`Enviar mensagens`",
      SendTTSMessages: "`Enviar mensagens em tts`",
      ManageMessages: "`Gerenciar mensagens`",
      EmbedLinks: "`Enviar links`",
      AttachFiles: "`Enviar anexos`",
      ReadMessageHistory: "`Ver histórico de mensagens`",
      MentionEveryone: "`Mencionar everyone e cargos`",
      UseExternalEmojis: "`Usar emojis externos`",
      UseExternalStickers: "`Usar figurinhas externas`",
      ViewGuildInsights: "`Ver análises do servidor`",
      Connect: "`Conectar em call's`",
      Speak: `\`Falar em call's\``,
      MuteMembers: `\`Mutar membros\``,
      DeafenMembers: `\`Ensurdecer membros\``,
      MoveMembers: `\`Mover membros\``,
      UseVAD: `\`Utilizar detecção de voz\``,
      ChangeNickname: `\`Alterar apelido\``,
      ManageNicknames: `\`Gerenciar apelidos\``,
      ManageRoles: `\`Gerenciar cargos\``,
      ManageWebhooks: `\`Gerenciar webhooks\``,
      ManageEmojisAndStickers: `\`Gerenciar emojis e figurinhas\``,
      UseApplicationCommands: `\`Utilizar comandos slashs (/)\``,
      RequestToSpeak: `\`Pedir para falar\``,
      ManageEvents: `\`Gerenciar eventos\``,
      ManageThreads: `\`Gerenciar threads\``,
      CreatePublicThreads: `\`Criar threads públicas\``,
      CreatePrivateThreads: `\`Criar threads privadas\``,
      SendMessagesInThreads: `\`Falar em threads\``,
      UseEmbeddedActivities: `\`Iniciar atividades\``,
      ModerateMembers: `\`Gerenciar moderação do servidor\``,
    };

    let sobremim = await db.get(`aboutme_${usuarioTest}`);

    const embedUser = new EmbedBuilder()
      .setAuthor({
        name: `${client.user.username}`,
        iconURL: `${client.user.displayAvatarURL()}`,
      })
      .setThumbnail(usuarioTest.displayAvatarURL({ dynamyc: true }))
      .setColor("#00000")
      .addFields(
        {
          name: `:necktie: | Nome:`,
          value: `\`\`\`${usuarioTest.tag}\`\`\``,
          inline: true,
        },
        {
          name: `<:id:1048346708733612032> | Identidade`,
          value: `\`\`\`${usuarioTest.id}\`\`\``,
          inline: true,
        },
        {
          name: `<:mens:1048346497953042452> | Menção:`,
          value: `<@${usuarioTest.id}>`,
          inline: true,
        },
        {
          name: `<:date:1048351021358919731> | Conta Criada:`,
          value: `<t:${~~(usuarioTest.createdTimestamp / 1000)}:f> (<t:${~~(
            usuarioTest.createdTimestamp / 1000
          )}:R>)`,
          inline: false,
        }
      )
      .setFooter({
        text: `Requisitado por: ${interaction.user.tag}`,
        iconURL: interaction.user.displayAvatarURL({ format: "png" }),
      });

    const botaoUser = new ButtonBuilder()
      .setLabel("Permissões do Membro")
      .setStyle(ButtonStyle.Secondary)
      .setCustomId("verPerms");

    if (!acharUser)
      botaoUser.setLabel(
        "<:erro1:936752679319896115> | Não encontrado no servidor"
      ),
        botaoUser.setDisabled(true);
    if (acharUser)
      embedUser.addFields({
        name: `<:date:1048351065717870682> | Entrou no Servidor em:`,
        value: `<t:${~~(acharUser.joinedTimestamp / 1000)}:f> (<t:${~~(
          acharUser.joinedTimestamp / 1000
        )}:R>)`,
        inline: false,
      });

    const rowUser = new ActionRowBuilder().addComponents(botaoUser);

    let msgUser = await interaction.reply({
      embeds: [embedUser],
      components: [rowUser],
      fetchReply: true,
    });

    const coletorPerms = msgUser.createMessageComponentCollector({
      componentType: ComponentType.Button,
      filter: (m) => m.member.id == interaction.user.id,
    });

    coletorPerms.on("collect", async (interaction) => {
      if (interaction.customId === "verPerms") {
        const permsArray = acharUser.permissions
          .toArray()
          .map((p) => permsObj[p]);

        const embedPerms = new EmbedBuilder()
          .setColor("#00000")
          .addFields(
            {
              name: "<:1_:880546834437799966> | Maior Cargo:",
              value: `${acharUser.roles.cache
                .sort((a, b) => b.position - a.position)
                .first()}`,
              inline: false,
            },
            {
              name: `<:emg:1048351043056050186> | Permissões de ${usuarioTest.username}`,
              value: `${permsArray.join(", ")}`,
            }
          )
          .setFooter({
            text: `Requisitado por: ${interaction.user.tag}`,
            iconURL: interaction.user.displayAvatarURL({ format: "png" }),
          });

        await interaction.reply({ embeds: [embedPerms], ephemeral: true });
      }
    });
  },
};
