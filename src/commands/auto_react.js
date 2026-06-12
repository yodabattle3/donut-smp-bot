import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('auto_react')
  .setDescription('Enable auto reaction')
  .addStringOption(option => option.setName('reaction').setDescription('Emoji to auto react').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  const reaction = interaction.options.getString('reaction');

  const embed = new EmbedBuilder()
    .setColor('#00FF00')
    .setTitle('✅ Auto React Enabled')
    .addFields(
      { name: 'Emoji', value: reaction, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
