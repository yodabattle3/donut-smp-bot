import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ticket_blacklist')
  .setDescription('Blacklist a user from creating tickets')
  .addUserOption(option => option.setName('user').setDescription('User to blacklist').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');

  const embed = new EmbedBuilder()
    .setColor('#8B0000')
    .setTitle('🚫 User Blacklisted')
    .addFields(
      { name: 'User', value: user.tag, inline: true },
      { name: 'Reason', value: 'Ticket blacklist', inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
