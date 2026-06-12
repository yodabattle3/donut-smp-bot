import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('untimeout')
  .setDescription('Remove timeout from a member')
  .addUserOption(option => option.setName('user').setDescription('User to untimeout').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');
  const member = await interaction.guild.members.fetch(user.id).catch(() => null);

  if (!member) {
    return interaction.reply({ content: '❌ Member not found!', ephemeral: true });
  }

  try {
    await member.timeout(null);

    const embed = new EmbedBuilder()
      .setColor('#00FF00')
      .setTitle('✅ Timeout Removed')
      .addFields(
        { name: 'User', value: `${user.tag}`, inline: true }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  } catch (error) {
    await interaction.reply({ content: '❌ Could not remove timeout!', ephemeral: true });
  }
}
