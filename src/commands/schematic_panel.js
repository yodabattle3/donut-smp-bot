import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('schemantic_panel')
  .setDescription('View schematic panel')
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#0099ff')
    .setTitle('📐 Schematic Panel')
    .setDescription('Schematic management panel')
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
