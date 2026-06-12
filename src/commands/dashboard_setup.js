import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('dashboard_setup')
  .setDescription('Setup the dashboard')
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#0099ff')
    .setTitle('⚙️ Dashboard Setup')
    .setDescription('Dashboard has been configured')
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
