import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('timeout')
  .setDescription('Timeout a member')
  .addUserOption(option => option.setName('user').setDescription('User to timeout').setRequired(true))
  .addIntegerOption(option => option.setName('duration').setDescription('Duration in minutes').setRequired(true))
  .addStringOption(option => option.setName('reason').setDescription('Reason for timeout').setRequired(false))
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');
  const duration = interaction.options.getInteger('duration');
  const reason = interaction.options.getString('reason') || 'No reason provided';
  const member = await interaction.guild.members.fetch(user.id).catch(() => null);

  if (!member) {
    return interaction.reply({ content: '❌ Member not found!', ephemeral: true });
  }

  try {
    await member.timeout(duration * 60 * 1000, reason);

    const embed = new EmbedBuilder()
      .setColor('#FFD700')
      .setTitle('⏱️ Member Timed Out')
      .addFields(
        { name: 'User', value: `${user.tag}`, inline: true },
        { name: 'Duration', value: `${duration} minutes`, inline: true },
        { name: 'Reason', value: reason, inline: true }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  } catch (error) {
    await interaction.reply({ content: '❌ Could not timeout member!', ephemeral: true });
  }
}
