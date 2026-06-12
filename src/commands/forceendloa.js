import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('forceendloa')
  .setDescription('Force end a member\'s Leave of Absence')
  .addUserOption(option => option.setName('user').setDescription('User to force end LOA').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');

  const embed = new EmbedBuilder()
    .setColor('#FF6347')
    .setTitle('⚠️ LOA Force Ended')
    .addFields(
      { name: 'User', value: user.tag, inline: true },
      { name: 'Ended By', value: interaction.user.tag, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
