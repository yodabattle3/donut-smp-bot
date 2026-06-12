import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('wait')
  .setDescription('Wait for a specified duration')
  .addIntegerOption(option => option.setName('seconds').setDescription('Seconds to wait').setRequired(true));

export async function execute(interaction) {
  const seconds = interaction.options.getInteger('seconds');

  const embed = new EmbedBuilder()
    .setColor('#FFD700')
    .setTitle('⏳ Waiting...')
    .addFields(
      { name: 'Duration', value: `${seconds} seconds`, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });

  setTimeout(async () => {
    const doneEmbed = new EmbedBuilder()
      .setColor('#00FF00')
      .setTitle('✅ Wait Complete')
      .setTimestamp();

    await interaction.followUp({ embeds: [doneEmbed] });
  }, seconds * 1000);
}
