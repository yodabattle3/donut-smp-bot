import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('embed')
  .setDescription('Create a custom embed')
  .addStringOption(option => option.setName('title').setDescription('Embed title').setRequired(true))
  .addStringOption(option => option.setName('description').setDescription('Embed description').setRequired(true))
  .addStringOption(option => option.setName('color').setDescription('Embed color (hex)').setRequired(false))
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  const title = interaction.options.getString('title');
  const description = interaction.options.getString('description');
  const color = interaction.options.getString('color') || '#0099ff';

  const embed = new EmbedBuilder()
    .setColor(color)
    .setTitle(title)
    .setDescription(description)
    .setTimestamp();

  await interaction.channel.send({ embeds: [embed] });
  await interaction.reply({ content: '✅ Embed sent!', ephemeral: true });
}
