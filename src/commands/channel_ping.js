import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('channel_ping')
  .setDescription('Ping a channel')
  .addChannelOption(option => option.setName('channel').setDescription('Channel to ping').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages);

export async function execute(interaction) {
  const channel = interaction.options.getChannel('channel');

  const embed = new EmbedBuilder()
    .setColor('#0099ff')
    .setTitle('📢 Channel Pinged')
    .addFields(
      { name: 'Channel', value: channel.name, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
