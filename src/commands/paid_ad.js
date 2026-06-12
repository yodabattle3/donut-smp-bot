import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('paid_ad')
  .setDescription('Post a paid advertisement')
  .addStringOption(option => option.setName('content').setDescription('Ad content').setRequired(true));

export async function execute(interaction) {
  const content = interaction.options.getString('content');

  const embed = new EmbedBuilder()
    .setColor('#FFD700')
    .setTitle('💰 Paid Advertisement')
    .setDescription(content)
    .addFields(
      { name: 'Posted By', value: interaction.user.tag, inline: true }
    )
    .setTimestamp();

  await interaction.channel.send({ embeds: [embed] });
  await interaction.reply({ content: '✅ Paid ad posted!', ephemeral: true });
}
