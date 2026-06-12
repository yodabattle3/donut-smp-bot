import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('jail_tickets')
  .setDescription('View jail tickets');

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#8B0000')
    .setTitle('📋 Jail Tickets')
    .setDescription('All active jail tickets')
    .addFields(
      { name: 'Total', value: '0', inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
