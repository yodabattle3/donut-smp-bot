import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('reroll')
  .setDescription('Reroll something');

export async function execute(interaction) {
  const result = Math.floor(Math.random() * 100);

  const embed = new EmbedBuilder()
    .setColor('#FFD700')
    .setTitle('🎲 Reroll Result')
    .addFields(
      { name: 'Result', value: `${result}`, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
