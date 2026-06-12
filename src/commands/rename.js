import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('rename')
  .setDescription('Rename a member')
  .addUserOption(option => option.setName('user').setDescription('User to rename').setRequired(true))
  .addStringOption(option => option.setName('newname').setDescription('New name for member').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageNicknames);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');
  const newName = interaction.options.getString('newname');
  const member = await interaction.guild.members.fetch(user.id);

  try {
    await member.setNickname(newName);

    const embed = new EmbedBuilder()
      .setColor('#00FF00')
      .setTitle('✅ Member Renamed')
      .addFields(
        { name: 'User', value: user.tag, inline: true },
        { name: 'New Name', value: newName, inline: true }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  } catch (error) {
    await interaction.reply({ content: '❌ Could not rename member!', ephemeral: true });
  }
}
