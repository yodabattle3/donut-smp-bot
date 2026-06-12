import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('apps_blacklistlist')
  .setDescription('View all blacklisted applicants');

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#8B0000')
    .setTitle('📋 Applicant Blacklist')
    .setDescription('Users blacklisted from applying')
    .addFields(
      { name: 'Count', value: '0', inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
