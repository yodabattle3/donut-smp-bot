import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('resetresponses')
  .setDescription('Reset all responses')
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#FF6347')
    .setTitle('🔄 Responses Reset')
    .setDescription('All responses have been reset')
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
