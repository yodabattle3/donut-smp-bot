import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('membervisibility')
  .setDescription('Set your visibility status')
  .addStringOption(option => 
    option.setName('visibility').setDescription('Visibility setting').setRequired(true)
      .addChoices(
        { name: 'Public', value: 'public' },
        { name: 'Private', value: 'private' },
        { name: 'Hidden', value: 'hidden' }
      )
  );

export async function execute(interaction) {
  const visibility = interaction.options.getString('visibility');

  const embed = new EmbedBuilder()
    .setColor('#00FF00')
    .setTitle('✅ Visibility Updated')
    .addFields(
      { name: 'User', value: interaction.user.tag, inline: true },
      { name: 'Visibility', value: visibility.charAt(0).toUpperCase() + visibility.slice(1), inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
