import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('link_ign')
  .setDescription('Link your Minecraft IGN')
  .addStringOption(option => option.setName('ign').setDescription('Your Minecraft IGN').setRequired(true));

export async function execute(interaction) {
  const ign = interaction.options.getString('ign');

  const embed = new EmbedBuilder()
    .setColor('#00FF00')
    .setTitle('✅ IGN Linked')
    .addFields(
      { name: 'User', value: interaction.user.tag, inline: true },
      { name: 'IGN', value: ign, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
