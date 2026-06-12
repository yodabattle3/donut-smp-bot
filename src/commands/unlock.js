import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('unlock')
  .setDescription('Unlock a channel')
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels);

export async function execute(interaction) {
  try {
    await interaction.channel.permissionOverwrites.edit(interaction.guild.id, {
      SendMessages: null,
    });

    const embed = new EmbedBuilder()
      .setColor('#00FF00')
      .setTitle('🔓 Channel Unlocked')
      .addFields(
        { name: 'Channel', value: `${interaction.channel.name}`, inline: true }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  } catch (error) {
    await interaction.reply({ content: '❌ Could not unlock channel!', ephemeral: true });
  }
}
