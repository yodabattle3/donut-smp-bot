import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('staff_debt_pay')
  .setDescription('Pay off your staff debt')
  .addNumberOption(option => option.setName('amount').setDescription('Amount to pay').setRequired(true));

export async function execute(interaction) {
  const amount = interaction.options.getNumber('amount');

  const embed = new EmbedBuilder()
    .setColor('#00FF00')
    .setTitle('✅ Payment Processed')
    .addFields(
      { name: 'Amount Paid', value: `$${amount}`, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
