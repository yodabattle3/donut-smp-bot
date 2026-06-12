import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('activityreset')
  .setDescription('Reset activity scores for all members')
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#FF6347')
    .setTitle('🔄 Activity Scores Reset')
    .setDescription('All member activity scores have been reset')
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
