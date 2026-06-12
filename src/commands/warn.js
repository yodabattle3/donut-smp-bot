import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('warn')
  .setDescription('Warn a member')
  .addUserOption(option => option.setName('user').setDescription('User to warn').setRequired(true))
  .addStringOption(option => option.setName('reason').setDescription('Reason for warning').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');
  const reason = interaction.options.getString('reason');
  const member = await interaction.guild.members.fetch(user.id);

  if (!member) {
    return interaction.reply({ content: '❌ Member not found!', ephemeral: true });
  }

  const embed = new EmbedBuilder()
    .setColor('#FF6347')
    .setTitle('⚠️ Member Warned')
    .addFields(
      { name: 'User', value: `${user.tag}`, inline: true },
      { name: 'Reason', value: reason, inline: true },
      { name: 'Warned By', value: interaction.user.tag, inline: true }
    )
    .setTimestamp();

  try {
    await user.send({ embeds: [embed] });
  } catch (e) {
    console.log('Could not DM user');
  }

  await interaction.reply({ embeds: [embed] });
}
