import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('scammer_report')
  .setDescription('Report a scammer')
  .addUserOption(option => option.setName('user').setDescription('User to report').setRequired(true))
  .addStringOption(option => option.setName('reason').setDescription('Reason for report').setRequired(true));

export async function execute(interaction) {
  const user = interaction.options.getUser('user');
  const reason = interaction.options.getString('reason');

  const embed = new EmbedBuilder()
    .setColor('#FF6347')
    .setTitle('🚨 Scammer Report Submitted')
    .addFields(
      { name: 'Reported User', value: user.tag, inline: true },
      { name: 'Reporter', value: interaction.user.tag, inline: true },
      { name: 'Reason', value: reason, inline: false }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
