const Discord = require("discord.js");

const { Player } = require("discord-player");

const { Client, GatewayIntentBits } = require("discord.js");

const config = require("./config.json");

const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMembers,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
    Discord.GatewayIntentBits.GuildVoiceStates,
  ],
});

module.exports = client;

client.on("interactionCreate", (interaction) => {
  if (interaction.type === Discord.InteractionType.ApplicationCommand) {
    const cmd = client.slashCommands.get(interaction.commandName);

    if (!cmd) return interaction.reply(`Error`);

    interaction["member"] = interaction.guild.members.cache.get(
      interaction.user.id
    );

    cmd.run(client, interaction);
  }
});

client.on("ready", () => {
  console.log(`🔥 Estou online em ${client.user.username}!`);
});

client.slashCommands = new Discord.Collection();

require("./handler")(client);

client.login(config.token);

client.on("interactionCreate", (interaction) => {
  if (interaction.isStringSelectMenu()) {
    if (interaction.customId === "painel_ticket") {
      let opc = interaction.values[0];
      if (opc === "opc1") {
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Nova opção

        let nome = `📨-${interaction.user.id}`;
        let categoria = ""; // Coloque o ID da categoria

        if (!interaction.guild.channels.cache.get(categoria)) categoria = null;

        if (interaction.guild.channels.cache.find((c) => c.name === nome)) {
          interaction.reply({
            content: `❌ Você já possui um ticket aberto em ${interaction.guild.channels.cache.find(
              (c) => c.name === nome
            )}!`,
            ephemeral: true,
          });
        } else {
          interaction.guild.channels
            .create({
              name: nome,
              type: Discord.ChannelType.GuildText,
              parent: categoria,
              permissionOverwrites: [
                {
                  id: interaction.guild.id,
                  deny: [Discord.PermissionFlagsBits.ViewChannel],
                },
                {
                  id: interaction.user.id,
                  allow: [
                    Discord.PermissionFlagsBits.ViewChannel,
                    Discord.PermissionFlagsBits.SendMessages,
                    Discord.PermissionFlagsBits.AttachFiles,
                    Discord.PermissionFlagsBits.EmbedLinks,
                    Discord.PermissionFlagsBits.AddReactions,
                  ],
                },
              ],
            })
            .then((ch) => {
              interaction.reply({
                content: `✅ Olá ${interaction.user}, seu ticket foi aberto em ${ch}!`,
                ephemeral: true,
              });
              let embed = new Discord.EmbedBuilder()
                .setColor("Random")
                .setDescription(
                  `Olá ${interaction.user}, você abriu o ticket pela opção 1.`
                );
              let botao = new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                  .setCustomId("fechar_ticket")
                  .setEmoji("🔒")
                  .setStyle(Discord.ButtonStyle.Danger)
              );

              ch.send({ embeds: [embed], components: [botao] }).then((m) => {
                m.pin();
              });
            });
        }
      } else if (opc === "opc2") {
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Nova opção

        let nome = `📨-${interaction.user.id}`;
        let categoria = ""; // Coloque o ID da categoria

        if (!interaction.guild.channels.cache.get(categoria)) categoria = null;

        if (interaction.guild.channels.cache.find((c) => c.name === nome)) {
          interaction.reply({
            content: `❌ Você já possui um ticket aberto em ${interaction.guild.channels.cache.find(
              (c) => c.name === nome
            )}!`,
            ephemeral: true,
          });
        } else {
          interaction.guild.channels
            .create({
              name: nome,
              type: Discord.ChannelType.GuildText,
              parent: categoria,
              permissionOverwrites: [
                {
                  id: interaction.guild.id,
                  deny: [Discord.PermissionFlagsBits.ViewChannel],
                },
                {
                  id: interaction.user.id,
                  allow: [
                    Discord.PermissionFlagsBits.ViewChannel,
                    Discord.PermissionFlagsBits.SendMessages,
                    Discord.PermissionFlagsBits.AttachFiles,
                    Discord.PermissionFlagsBits.EmbedLinks,
                    Discord.PermissionFlagsBits.AddReactions,
                  ],
                },
              ],
            })
            .then((ch) => {
              interaction.reply({
                content: `✅ Olá ${interaction.user}, seu ticket foi aberto em ${ch}!`,
                ephemeral: true,
              });
              let embed = new Discord.EmbedBuilder()
                .setColor("Random")
                .setDescription(
                  `Olá ${interaction.user}, você abriu o ticket pela opção 2.`
                );
              let botao = new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                  .setCustomId("fechar_ticket")
                  .setEmoji("🔒")
                  .setStyle(Discord.ButtonStyle.Danger)
              );

              ch.send({ embeds: [embed], components: [botao] }).then((m) => {
                m.pin();
              });
            });
        }
      } else if (opc === "opc3") {
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Nova opção

        let nome = `📨-${interaction.user.id}`;
        let categoria = ""; // Coloque o ID da categoria

        if (!interaction.guild.channels.cache.get(categoria)) categoria = null;

        if (interaction.guild.channels.cache.find((c) => c.name === nome)) {
          interaction.reply({
            content: `❌ Você já possui um ticket aberto em ${interaction.guild.channels.cache.find(
              (c) => c.name === nome
            )}!`,
            ephemeral: true,
          });
        } else {
          interaction.guild.channels
            .create({
              name: nome,
              type: Discord.ChannelType.GuildText,
              parent: categoria,
              permissionOverwrites: [
                {
                  id: interaction.guild.id,
                  deny: [Discord.PermissionFlagsBits.ViewChannel],
                },
                {
                  id: interaction.user.id,
                  allow: [
                    Discord.PermissionFlagsBits.ViewChannel,
                    Discord.PermissionFlagsBits.SendMessages,
                    Discord.PermissionFlagsBits.AttachFiles,
                    Discord.PermissionFlagsBits.EmbedLinks,
                    Discord.PermissionFlagsBits.AddReactions,
                  ],
                },
              ],
            })
            .then((ch) => {
              interaction.reply({
                content: `✅ Olá ${interaction.user}, seu ticket foi aberto em ${ch}!`,
                ephemeral: true,
              });
              let embed = new Discord.EmbedBuilder()
                .setColor("Random")
                .setDescription(
                  `Olá ${interaction.user}, você abriu o ticket pela opção 3.`
                );
              let botao = new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                  .setCustomId("fechar_ticket")
                  .setEmoji("🔒")
                  .setStyle(Discord.ButtonStyle.Danger)
              );

              ch.send({ embeds: [embed], components: [botao] }).then((m) => {
                m.pin();
              });
            });
        }
      }
    }
  } else if (interaction.isButton()) {
    if (interaction.customId === "fechar_ticket") {
      interaction.reply(
        `Olá ${interaction.user}, este ticket será excluído em 5 segundos...`
      );
      setTimeout(() => {
        try {
          interaction.channel.delete();
        } catch (e) {
          return;
        }
      }, 5000);
    }
  }
});

client.on("interactionCreate", async (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId === "tickets_basico") {
      let nome_canal = `🔖-${interaction.user.id}`;
      let canal = interaction.guild.channels.cache.find(
        (c) => c.name === nome_canal
      );

      if (canal) {
        interaction.reply({
          content: `Olá **${interaction.user.username}**, você já possui um ticket em ${canal}.`,
          ephemeral: true,
        });
      } else {
        let categoria = interaction.channel.parent;
        if (!categoria) categoria = null;

        interaction.guild.channels
          .create({
            name: nome_canal,
            parent: categoria,
            type: Discord.ChannelType.GuildText,
            permissionOverwrites: [
              {
                id: interaction.guild.id,
                deny: [Discord.PermissionFlagsBits.ViewChannel],
              },
              {
                id: interaction.user.id,
                allow: [
                  Discord.PermissionFlagsBits.ViewChannel,
                  Discord.PermissionFlagsBits.AddReactions,
                  Discord.PermissionFlagsBits.SendMessages,
                  Discord.PermissionFlagsBits.AttachFiles,
                  Discord.PermissionFlagsBits.EmbedLinks,
                ],
              },
            ],
          })
          .then((chat) => {
            interaction.reply({
              content: `Olá **${interaction.user.username}**, seu ticket foi aberto em ${chat}.`,
              ephemeral: true,
            });

            let embed = new Discord.EmbedBuilder()
              .setColor("Random")
              .setDescription(
                `Olá ${interaction.user}, você abriu o seu ticket.\nAguarde um momento para ser atendido.\n Caso demore para ser atendido marque algum staff! `
              );

            let botao_close = new Discord.ActionRowBuilder().addComponents(
              new Discord.ButtonBuilder()
                .setCustomId("close_ticket")
                .setEmoji("🔒")
                .setStyle(Discord.ButtonStyle.Danger)
            );

            chat
              .send({ embeds: [embed], components: [botao_close] })
              .then((m) => {
                m.pin();
              });
          });
      }
    } else if (interaction.customId === "close_ticket") {
      interaction.reply(
        `Olá ${interaction.user}, este ticket será excluído em 5 segundos.`
      );
      try {
        setTimeout(() => {
          interaction.channel.delete().catch((e) => {
            return;
          });
        }, 5000);
      } catch (e) {
        return;
      }
    }
  }
});

client.on("guildMemberAdd", (member) => {
  let cargo_autorole = member.guild.roles.cache.get("1075950790218358914");
  if (!cargo_autorole)
    return console.log("❌ O AUTOROLE não está configurado.");

  member.roles.add(cargo_autorole.id).catch((err) => {
    console.log(
      `❌ Não foi possível adicionar o cargo de autorole no usuário ${member.user.tag}.`
    );
  });
});

const { QuickDB } = require("quick.db");
const db = new QuickDB(); // npm i quick.db better-sqlite3

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  let confirm = await db.get(`antilink_${message.guild.id}`);
  if (confirm === false || confirm === null) {
    return;
  } else if (confirm === true) {
    if (
      message.member.permissions.has(Discord.PermissionFlagsBits.Administrator)
    )
      return; // Caso o usuário tenha permissão de ADM, o bot vai permitir que o mesmo envie links
    if (message.content.toLocaleLowerCase().includes("http")) {
      message.delete();
      message.channel.send(`${message.author} Divulgue server no cu do seu pai arrombado!`);
    }
  }
});

const { joinVoiceChannel } = require("@discordjs/voice");

client.on("ready", () => {
  let canal = client.channels.cache.get("1076210265768599573"); // coloque o ID do canal de voz
  if (!canal) return console.log("❌ Não foi possível entrar no canal de voz.");
  if (canal.type !== Discord.ChannelType.GuildVoice)
    return console.log(
      `❌ Não foi possível entrar no canal [ ${canal.name} ].`
    );

  try {
    joinVoiceChannel({
      channelId: canal.id, // ID do canal de voz
      guildId: canal.guild.id, // ID do servidor
      adapterCreator: canal.guild.voiceAdapterCreator,
    });
    console.log(`✅ Entrei no canal de voz [ ${canal.name} ] com sucesso!`);
  } catch (e) {
    console.log(`❌ Não foi possível entrar no canal [ ${canal.name} ].`);
  }
});

client.on("interactionCreate", async (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId === "verificar") {
      let role_id = await db.get(`cargo_verificação_${interaction.guild.id}`);
      let role = interaction.guild.roles.cache.get(role_id);
      if (!role) return;
      interaction.member.roles.add(role.id);
      interaction.reply({
        content: `Ola **${interaction.user.username}**, você foi verificado!`,
        ephemeral: true,
      });
    }
  }
});

client.on("messageCreate", (message) => {
  let mention = new Discord.EmbedBuilder()

    .setDescription(`Coé menor`)
    .setColor(`#00000`);

  if (message.author.bot) return;
  if (message.content == `<@${client.user.id}>`)
    message.channel.send({ embeds: [mention] });
});

//**** log msg editada */

client.on("messageUpdate", (message, newMessage, oldMessage) => {
  if (message.author.bot) return;

  const canalLogs = message.guild.channels.cache.get("1076529423244853279");

  let usuárioMSGe = message.author.id;
  let usuárioMSGf = message.author;
  let ConteúdoAntigoMSG = message.content;
  let ConteúdoNovoMSG = newMessage;
  let CanalMSGEditada = message.channel;

  const embed_editada = new Discord.EmbedBuilder()
    .setTitle(`**Mensagem Editada**`)
    .setColor("Black")
    .setFooter({ text: `ID do usuário: ${usuárioMSGe}` })
    .setTimestamp(new Date())
    .setDescription(
      `**📝 ${usuárioMSGf} editou uma mensagem de texto**\n\n**Canal de texto:** ${CanalMSGEditada} \n\n**Antiga mensagem:** \n \`\`\`${ConteúdoAntigoMSG}\`\`\` \n\n**Nova mensagem:** \n \`\`\`${ConteúdoNovoMSG}\`\`\``
    );

  try {
    canalLogs.send({ embeds: [embed_editada] });
  } catch (e) {}
});
//**** log msg deletada */

client.on("messageDelete", async (message) => {
  const canalLogs = message.guild.channels.cache.get("1076529454974783618");

  if (message.author.bot) return;

  let msgDelete = message.content;
  const qmdeletou = message.author.id;
  const canaldelatado = message.channel;

  const embed_delete = new Discord.EmbedBuilder()
    .setTitle(`**Mensagem Deletada**`)
    .setColor("Black")
    .setFooter({ text: `ID do usuário: ${qmdeletou}` })
    .setTimestamp(new Date())
    .setDescription(
      `**📝 Mensagem de texto deletada**\n\n**Canal de texto:** ${canaldelatado} \n\n**Mensagem:**\n \`\`\`${msgDelete}\`\`\``
    );

  try {
    canalLogs.send({ embeds: [embed_delete] });
  } catch (e) {}
});

// Sistema de Boas-Vindas *****

client.on("guildMemberAdd", (member) => {
  let canal_logs = "1076265270504599622";
  if (!canal_logs) return;

  let embed = new Discord.EmbedBuilder()
    .setColor("Green")
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setTitle("👋 Boas Vindas!")
    .setDescription(
      `> Olá ${member}!\nSeja Bem-Vindo(a) ao servidor \`${member.guild.name}\`!\nAtualmente estamos com \`${member.guild.memberCount}\` membros.`
    );

    let canal = member.guild.channels.cache.get(canal_logs);
  member.guild.channels.cache
    .get(canal_logs)
    if (canal) {
      canal.send({ embeds: [embed], content: `${member}` }).then((msg) => {
        setTimeout(() => {
          msg.delete();
        }, 5000);
      });
    }
});

//*** log de saida */

client.on("guildMemberRemove", (member) => {
  let canal_logs = "1076538824810836069";
  if (!canal_logs) return;

  let embed = new Discord.EmbedBuilder()
    .setColor("Red")
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setTitle(`Adeus ${member.user.username}....`)
    .setDescription(
      `> O usuário ${member} saiu do servidor!\n> 😓 Espero que retorne um dia.\n> Nos sobrou apenas \`${member.guild.memberCount}\` membros.`
    );

  member.guild.channels.cache
    .get(canal_logs)
    .send({ embeds: [embed], content: `${member}` }); // Caso queira que o usuário não seja mencionado, retire a parte do "content".
});

process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception: " + err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.log(
    "[GRAVE] Rejeição possivelmente não tratada em: Promise ",
    promise,
    " motivo: ",
    reason.message
  );
});

//**handler na index pra colocar na host */

const fs = require("fs");
const Collection = require("discord.js");

module.exports = async (client) => {
  const SlashsArray = [];

  fs.readdir(`./Commands`, (error, folder) => {
    folder.forEach((subfolder) => {
      fs.readdir(`./Commands/${subfolder}/`, (error, files) => {
        files.forEach((files) => {
          if (!files?.endsWith(".js")) return;
          files = require(`../Commands/${subfolder}/${files}`);
          if (!files?.name) return;
          client.slashCommands.set(files?.name, files);

          SlashsArray.push(files);
        });
      });
    });
  });
  client.on("ready", async () => {
    client.guilds.cache.forEach((guild) => guild.commands.set(SlashsArray));
  });
};
//** fim */