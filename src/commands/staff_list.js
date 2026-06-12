import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('staff_list')
  .setDescription('View all staff members');

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#0099ff')
    .setTitle('👥 Staff List')
    .setDescription('All current staff members')
    .addFields(
      { name: 'Total Staff', value: '5', inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
