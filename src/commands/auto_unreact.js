import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('auto_unreact')
  .setDescription('Disable auto reaction')
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#FF6347')
    .setTitle('❌ Auto React Disabled')
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
