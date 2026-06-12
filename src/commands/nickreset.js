import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('nickreset')
  .setDescription('Reset a member\'s nickname')
  .addUserOption(option => option.setName('user').setDescription('User to reset nickname').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageNicknames);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');
  const member = await interaction.guild.members.fetch(user.id);

  try {
    await member.setNickname(null);

    const embed = new EmbedBuilder()
      .setColor('#00FF00')
      .setTitle('✅ Nickname Reset')
      .addFields(
        { name: 'User', value: user.tag, inline: true }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  } catch (error) {
    await interaction.reply({ content: '❌ Could not reset nickname!', ephemeral: true });
  }
}
