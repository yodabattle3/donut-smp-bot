import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ign_list')
  .setDescription('View the IGN list for all members');

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#0099ff')
    .setTitle('📋 Member IGN List')
    .setDescription('All linked Minecraft IGNs')
    .addFields(
      { name: 'Players', value: 'List would appear here', inline: false }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
