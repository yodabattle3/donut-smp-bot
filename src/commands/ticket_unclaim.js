import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ticket_unclaim')
  .setDescription('Unclaim a support ticket')
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#FF6347')
    .setTitle('❌ Ticket Unclaimed')
    .setDescription('This ticket is no longer claimed')
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
