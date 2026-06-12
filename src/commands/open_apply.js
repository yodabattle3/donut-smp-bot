import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('open_apply')
  .setDescription('Open applications')
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#00FF00')
    .setTitle('📖 Applications Opened')
    .setDescription('Whitelist applications are now open!')
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
