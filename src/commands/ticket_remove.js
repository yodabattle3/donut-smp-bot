import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ticket_remove')
  .setDescription('Remove a user from a ticket')
  .addUserOption(option => option.setName('user').setDescription('User to remove').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');

  const embed = new EmbedBuilder()
    .setColor('#FF6347')
    .setTitle('✅ User Removed from Ticket')
    .addFields(
      { name: 'Removed User', value: user.tag, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
