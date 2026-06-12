import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('temprole')
  .setDescription('Give a temporary role to a member')
  .addUserOption(option => option.setName('user').setDescription('User').setRequired(true))
  .addRoleOption(option => option.setName('role').setDescription('Temporary role').setRequired(true))
  .addIntegerOption(option => option.setName('duration').setDescription('Duration in minutes').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');
  const role = interaction.options.getRole('role');
  const duration = interaction.options.getInteger('duration');
  const member = await interaction.guild.members.fetch(user.id);

  try {
    await member.roles.add(role);

    const embed = new EmbedBuilder()
      .setColor('#FFD700')
      .setTitle('⏱️ Temporary Role Given')
      .addFields(
        { name: 'User', value: user.tag, inline: true },
        { name: 'Role', value: role.name, inline: true },
        { name: 'Duration', value: `${duration} minutes`, inline: true }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });

    setTimeout(async () => {
      await member.roles.remove(role).catch(() => {});
    }, duration * 60 * 1000);
  } catch (error) {
    await interaction.reply({ content: '❌ Could not give role!', ephemeral: true });
  }
}
