import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('loa')
  .setDescription('Request a Leave of Absence')
  .addStringOption(option => option.setName('reason').setDescription('Reason for LOA').setRequired(false))
  .addIntegerOption(option => option.setName('days').setDescription('Number of days for LOA').setRequired(false));

export async function execute(interaction) {
  const reason = interaction.options.getString('reason') || 'No reason provided';
  const days = interaction.options.getInteger('days') || 7;

  const embed = new EmbedBuilder()
    .setColor('#FFD700')
    .setTitle('📝 Leave of Absence Requested')
    .addFields(
      { name: 'User', value: interaction.user.tag, inline: true },
      { name: 'Duration', value: `${days} days`, inline: true },
      { name: 'Reason', value: reason, inline: false }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
