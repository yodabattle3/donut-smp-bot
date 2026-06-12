import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('scammer_remove')
  .setDescription('Remove a user from the scammer list')
  .addUserOption(option => option.setName('user').setDescription('User to remove').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');

  const embed = new EmbedBuilder()
    .setColor('#00FF00')
    .setTitle('✅ Scammer Removed')
    .addFields(
      { name: 'User', value: user.tag, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
