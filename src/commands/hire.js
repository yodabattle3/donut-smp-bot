import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('hire')
  .setDescription('Hire a new staff member')
  .addUserOption(option => option.setName('user').setDescription('User to hire').setRequired(true))
  .addStringOption(option => option.setName('position').setDescription('Position').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');
  const position = interaction.options.getString('position');

  const embed = new EmbedBuilder()
    .setColor('#00FF00')
    .setTitle('✅ Staff Member Hired')
    .addFields(
      { name: 'User', value: user.tag, inline: true },
      { name: 'Position', value: position, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
