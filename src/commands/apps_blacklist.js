import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('apps_blacklist')
  .setDescription('Blacklist a user from applying')
  .addUserOption(option => option.setName('user').setDescription('User to blacklist').setRequired(true))
  .setStringOption(option => option.setName('reason').setDescription('Reason for blacklist').setRequired(false))
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');
  const reason = interaction.options.getString('reason') || 'No reason provided';

  const embed = new EmbedBuilder()
    .setColor('#8B0000')
    .setTitle('🚫 Applicant Blacklisted')
    .addFields(
      { name: 'User', value: user.tag, inline: true },
      { name: 'Reason', value: reason, inline: false }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
