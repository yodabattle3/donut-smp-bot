import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('gw_proof')
  .setDescription('Submit giveaway proof');

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#FFD700')
    .setTitle('🎁 Giveaway Proof Submitted')
    .addFields(
      { name: 'User', value: interaction.user.tag, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
