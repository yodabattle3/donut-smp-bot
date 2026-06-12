import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('payments')
  .setDescription('Check payment status');

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#0099ff')
    .setTitle('💳 Payment Status')
    .addFields(
      { name: 'Status', value: 'Up to date', inline: true },
      { name: 'Balance', value: '$0.00', inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
