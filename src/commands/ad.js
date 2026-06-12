import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ad')
  .setDescription('Post an advertisement')
  .addStringOption(option => option.setName('content').setDescription('Ad content').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  const content = interaction.options.getString('content');

  const embed = new EmbedBuilder()
    .setColor('#FF69B4')
    .setTitle('📢 Advertisement')
    .setDescription(content)
    .setTimestamp();

  await interaction.channel.send({ embeds: [embed] });
  await interaction.reply({ content: '✅ Ad posted!', ephemeral: true });
}
