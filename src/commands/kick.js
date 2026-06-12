import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('kick')
  .setDescription('Kick a member from the server')
  .addUserOption(option => option.setName('user').setDescription('User to kick').setRequired(true))
  .addStringOption(option => option.setName('reason').setDescription('Reason for kick').setRequired(false))
  .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');
  const reason = interaction.options.getString('reason') || 'No reason provided';
  const member = await interaction.guild.members.fetch(user.id).catch(() => null);

  if (!member) {
    return interaction.reply({ content: '❌ Member not found!', ephemeral: true });
  }

  try {
    await member.kick(reason);

    const embed = new EmbedBuilder()
      .setColor('#FF8C00')
      .setTitle('👢 Member Kicked')
      .addFields(
        { name: 'User', value: `${user.tag}`, inline: true },
        { name: 'Reason', value: reason, inline: true }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  } catch (error) {
    await interaction.reply({ content: '❌ Could not kick member!', ephemeral: true });
  }
}
