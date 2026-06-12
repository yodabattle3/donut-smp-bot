import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ticket_unblacklist')
  .setDescription('Unblacklist a user from creating tickets')
  .addUserOption(option => option.setName('user').setDescription('User to unblacklist').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');

  const embed = new EmbedBuilder()
    .setColor('#00FF00')
    .setTitle('✅ User Unblacklisted')
    .addFields(
      { name: 'User', value: user.tag, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
