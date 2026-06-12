import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('endloa')
  .setDescription('End your Leave of Absence');

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#00FF00')
    .setTitle('✅ Leave of Absence Ended')
    .addFields(
      { name: 'User', value: interaction.user.tag, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
