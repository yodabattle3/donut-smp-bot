import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('rig')
  .setDescription('Check your luck or run a mini game');

export async function execute(interaction) {
  const luck = Math.floor(Math.random() * 100);

  const embed = new EmbedBuilder()
    .setColor('#FFD700')
    .setTitle('🎲 Luck Check')
    .addFields(
      { name: 'Luck Score', value: `${luck}/100`, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
