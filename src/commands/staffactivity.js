import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('staffactivity')
  .setDescription('Check staff activity');

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#0099ff')
    .setTitle('📊 Staff Activity Report')
    .setDescription('Staff member activity statistics')
    .addFields(
      { name: 'Total Active', value: '12', inline: true },
      { name: 'Average Activity', value: '78/100', inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
