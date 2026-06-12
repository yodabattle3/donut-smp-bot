import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('remove_warn')
  .setDescription('Remove a warning from a member')
  .addUserOption(option => option.setName('user').setDescription('User to remove warning from').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');

  const embed = new EmbedBuilder()
    .setColor('#00FF00')
    .setTitle('✅ Warning Removed')
    .addFields(
      { name: 'User', value: `${user.tag}`, inline: true },
      { name: 'Removed By', value: interaction.user.tag, inline: true }
    )
    .setTimestamp();

  try {
    await user.send({ embeds: [embed] });
  } catch (e) {
    console.log('Could not DM user');
  }

  await interaction.reply({ embeds: [embed] });
}
