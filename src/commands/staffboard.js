import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('staffboard')
  .setDescription('View the staff leaderboard');

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#FFD700')
    .setTitle('🏆 Staff Leaderboard')
    .addFields(
      { name: '1st', value: 'Staff Member 1', inline: true },
      { name: '2nd', value: 'Staff Member 2', inline: true },
      { name: '3rd', value: 'Staff Member 3', inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
