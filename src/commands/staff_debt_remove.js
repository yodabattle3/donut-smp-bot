import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('staff_debt_remove')
  .setDescription('Remove debt from a staff member')
  .addUserOption(option => option.setName('user').setDescription('Staff member').setRequired(true))
  .addNumberOption(option => option.setName('amount').setDescription('Amount to remove').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');
  const amount = interaction.options.getNumber('amount');

  const embed = new EmbedBuilder()
    .setColor('#00FF00')
    .setTitle('✅ Debt Removed')
    .addFields(
      { name: 'User', value: user.tag, inline: true },
      { name: 'Amount', value: `$${amount}`, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
