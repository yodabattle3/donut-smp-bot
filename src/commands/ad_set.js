import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ad_set')
  .setDescription('Set up automatic advertisements')
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#FFD700')
    .setTitle('⚙️ Advertisement Setup')
    .setDescription('Automatic ad system configured')
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
