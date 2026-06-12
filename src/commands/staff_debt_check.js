import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('staff_debt_check')
  .setDescription('Check your staff debt');

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#0099ff')
    .setTitle('💳 Debt Check')
    .addFields(
      { name: 'User', value: interaction.user.tag, inline: true },
      { name: 'Debt', value: '$0.00', inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed], ephemeral: true });
}
