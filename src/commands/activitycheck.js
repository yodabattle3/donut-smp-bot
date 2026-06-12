import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('activitycheck')
  .setDescription('Check your activity score');

export async function execute(interaction) {
  const activityScore = Math.floor(Math.random() * 100);

  const embed = new EmbedBuilder()
    .setColor('#0099ff')
    .setTitle('📊 Activity Check')
    .addFields(
      { name: 'User', value: interaction.user.tag, inline: true },
      { name: 'Activity Score', value: `${activityScore}/100`, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
