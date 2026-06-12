import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('demote')
  .setDescription('Demote a member by removing a role')
  .addUserOption(option => option.setName('user').setDescription('User to demote').setRequired(true))
  .addRoleOption(option => option.setName('role').setDescription('Role to remove').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');
  const role = interaction.options.getRole('role');
  const member = await interaction.guild.members.fetch(user.id);

  if (!member) {
    return interaction.reply({ content: '❌ Member not found!', ephemeral: true });
  }

  try {
    await member.roles.remove(role);

    const embed = new EmbedBuilder()
      .setColor('#FF6347')
      .setTitle('⬇️ Member Demoted')
      .addFields(
        { name: 'User', value: `${user.tag}`, inline: true },
        { name: 'Removed Role', value: `${role.name}`, inline: true }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  } catch (error) {
    await interaction.reply({ content: '❌ Could not demote member!', ephemeral: true });
  }
}
