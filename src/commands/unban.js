import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('unban')
  .setDescription('Unban a member from the server')
  .addUserOption(option => option.setName('user').setDescription('User to unban').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');

  try {
    await interaction.guild.bans.remove(user);

    const embed = new EmbedBuilder()
      .setColor('#00FF00')
      .setTitle('✅ Member Unbanned')
      .addFields(
        { name: 'User', value: `${user.tag}`, inline: true }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  } catch (error) {
    await interaction.reply({ content: '❌ Could not unban member!', ephemeral: true });
  }
}
