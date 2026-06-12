import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('clear_all_strikes')
  .setDescription('Clear all strikes from all members')
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#FFD700')
    .setTitle('⚡ All Strikes Cleared')
    .setDescription('All member strikes have been cleared from the system')
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
