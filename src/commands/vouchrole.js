import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('vouchrole')
  .setDescription('Give a vouch role to a member')
  .addUserOption(option => option.setName('user').setDescription('User to give role').setRequired(true))
  .addRoleOption(option => option.setName('role').setDescription('Vouch role').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');
  const role = interaction.options.getRole('role');
  const member = await interaction.guild.members.fetch(user.id);

  try {
    await member.roles.add(role);

    const embed = new EmbedBuilder()
      .setColor('#00FF00')
      .setTitle('✅ Vouch Role Given')
      .addFields(
        { name: 'User', value: user.tag, inline: true },
        { name: 'Role', value: role.name, inline: true }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  } catch (error) {
    await interaction.reply({ content: '❌ Could not give role!', ephemeral: true });
  }
}
