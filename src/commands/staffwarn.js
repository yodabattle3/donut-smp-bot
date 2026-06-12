import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('staffwarn')
  .setDescription('Warn a staff member')
  .addUserOption(option => option.setName('user').setDescription('Staff member to warn').setRequired(true))
  .addStringOption(option => option.setName('reason').setDescription('Reason for warning').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');
  const reason = interaction.options.getString('reason');

  const embed = new EmbedBuilder()
    .setColor('#FF6347')
    .setTitle('⚠️ Staff Warning')
    .addFields(
      { name: 'User', value: user.tag, inline: true },
      { name: 'Reason', value: reason, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
