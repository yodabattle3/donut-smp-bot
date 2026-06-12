import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('promote')
  .setDescription('Promote a member to a new role')
  .addUserOption(option => option.setName('user').setDescription('User to promote').setRequired(true))
  .addRoleOption(option => option.setName('role').setDescription('Role to give').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');
  const role = interaction.options.getRole('role');
  const member = await interaction.guild.members.fetch(user.id);

  if (!member) {
    return interaction.reply({ content: '❌ Member not found!', ephemeral: true });
  }

  try {
    await member.roles.add(role);

    const embed = new EmbedBuilder()
      .setColor('#00FF00')
      .setTitle('⬆️ Member Promoted')
      .addFields(
        { name: 'User', value: `${user.tag}`, inline: true },
        { name: 'New Role', value: `${role.name}`, inline: true }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  } catch (error) {
    await interaction.reply({ content: '❌ Could not promote member!', ephemeral: true });
  }
}
