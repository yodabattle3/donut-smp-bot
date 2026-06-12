import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ticket_blacklists')
  .setDescription('View all blacklisted users from tickets');

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#8B0000')
    .setTitle('📋 Ticket Blacklist')
    .setDescription('Users blacklisted from creating tickets')
    .addFields(
      { name: 'Count', value: '0', inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
