import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('status')
  .setDescription('Check bot status');

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#00FF00')
    .setTitle('✅ Bot Status')
    .addFields(
      { name: 'Status', value: 'Online', inline: true },
      { name: 'Ping', value: `${interaction.client.ws.ping}ms`, inline: true },
      { name: 'Uptime', value: `${Math.floor(interaction.client.uptime / 1000 / 60)} minutes`, inline: true },
      { name: 'Guilds', value: `${interaction.client.guilds.cache.size}`, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
