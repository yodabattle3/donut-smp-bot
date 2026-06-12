import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('close_apply')
  .setDescription('Close applications')
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#FF6347')
    .setTitle('📖 Applications Closed')
    .setDescription('Whitelist applications are now closed!')
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
