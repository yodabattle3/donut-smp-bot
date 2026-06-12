import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('staff_vouch')
  .setDescription('Vouch for a staff member')
  .addUserOption(option => option.setName('user').setDescription('Staff member to vouch for').setRequired(true));

export async function execute(interaction) {
  const user = interaction.options.getUser('user');

  const embed = new EmbedBuilder()
    .setColor('#00FF00')
    .setTitle('✅ Vouch Recorded')
    .addFields(
      { name: 'Vouched For', value: user.tag, inline: true },
      { name: 'Vouched By', value: interaction.user.tag, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
