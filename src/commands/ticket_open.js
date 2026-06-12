import { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ticket_open')
  .setDescription('Open a support ticket')
  .addStringOption(option => option.setName('reason').setDescription('Reason for ticket').setRequired(true));

export async function execute(interaction) {
  const reason = interaction.options.getString('reason');

  const embed = new EmbedBuilder()
    .setColor('#00FF00')
    .setTitle('🎫 Ticket Created')
    .addFields(
      { name: 'User', value: interaction.user.tag, inline: true },
      { name: 'Reason', value: reason, inline: false }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
