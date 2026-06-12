import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ban')
  .setDescription('Ban a member from the server')
  .addUserOption(option => option.setName('user').setDescription('User to ban').setRequired(true))
  .addStringOption(option => option.setName('reason').setDescription('Reason for ban').setRequired(false))
  .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');
  const reason = interaction.options.getString('reason') || 'No reason provided';

  try {
    await interaction.guild.members.ban(user, { reason });

    const embed = new EmbedBuilder()
      .setColor('#8B0000')
      .setTitle('🔨 Member Banned')
      .addFields(
        { name: 'User', value: `${user.tag}`, inline: true },
        { name: 'Reason', value: reason, inline: true }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  } catch (error) {
    await interaction.reply({ content: '❌ Could not ban member!', ephemeral: true });
  }
}
