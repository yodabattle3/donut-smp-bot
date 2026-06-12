import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ticket_close')
  .setDescription('Close a support ticket')
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#FF6347')
    .setTitle('🎫 Ticket Closed')
    .setDescription('This ticket has been closed')
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
