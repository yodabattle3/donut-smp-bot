import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('lock')
  .setDescription('Lock a channel')
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels);

export async function execute(interaction) {
  try {
    await interaction.channel.permissionOverwrites.edit(interaction.guild.id, {
      SendMessages: false,
    });

    const embed = new EmbedBuilder()
      .setColor('#FF6347')
      .setTitle('🔒 Channel Locked')
      .addFields(
        { name: 'Channel', value: `${interaction.channel.name}`, inline: true }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  } catch (error) {
    await interaction.reply({ content: '❌ Could not lock channel!', ephemeral: true });
  }
}
