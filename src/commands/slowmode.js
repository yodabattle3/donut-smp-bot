import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('slowmode')
  .setDescription('Set slowmode for the channel')
  .addIntegerOption(option => option.setName('seconds').setDescription('Slowmode duration in seconds').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels);

export async function execute(interaction) {
  const seconds = interaction.options.getInteger('seconds');

  try {
    await interaction.channel.setRateLimitPerUser(seconds);

    const embed = new EmbedBuilder()
      .setColor('#FFD700')
      .setTitle('⏱️ Slowmode Set')
      .addFields(
        { name: 'Duration', value: `${seconds} seconds`, inline: true },
        { name: 'Channel', value: `${interaction.channel.name}`, inline: true }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  } catch (error) {
    await interaction.reply({ content: '❌ Could not set slowmode!', ephemeral: true });
  }
}
