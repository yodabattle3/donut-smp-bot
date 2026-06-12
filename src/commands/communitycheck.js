import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('communitycheck')
  .setDescription('Check community activity and statistics');

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#0099ff')
    .setTitle('🌍 Community Check')
    .addFields(
      { name: 'Total Members', value: '150', inline: true },
      { name: 'Active Members', value: '120', inline: true },
      { name: 'Activity Rate', value: '80%', inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
