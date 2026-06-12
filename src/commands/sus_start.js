import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('sus_start')
  .setDescription('Start a suspicious activity investigation')
  .addUserOption(option => option.setName('user').setDescription('User to investigate').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');

  const embed = new EmbedBuilder()
    .setColor('#FF6347')
    .setTitle('🔍 Investigation Started')
    .addFields(
      { name: 'User', value: user.tag, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
