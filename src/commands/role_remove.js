import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('role_remove')
  .setDescription('Remove a role from a member')
  .addUserOption(option => option.setName('user').setDescription('User to remove role from').setRequired(true))
  .addRoleOption(option => option.setName('role').setDescription('Role to remove').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');
  const role = interaction.options.getRole('role');
  const member = await interaction.guild.members.fetch(user.id);

  try {
    await member.roles.remove(role);

    const embed = new EmbedBuilder()
      .setColor('#FF6347')
      .setTitle('✅ Role Removed')
      .addFields(
        { name: 'User', value: user.tag, inline: true },
        { name: 'Role', value: role.name, inline: true }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  } catch (error) {
    await interaction.reply({ content: '❌ Could not remove role!', ephemeral: true });
  }
}
