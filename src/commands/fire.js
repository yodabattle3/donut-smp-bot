import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('fire')
  .setDescription('Fire a staff member')
  .addUserOption(option => option.setName('user').setDescription('Staff member to fire').setRequired(true))
  .addStringOption(option => option.setName('reason').setDescription('Reason for firing').setRequired(false))
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');
  const reason = interaction.options.getString('reason') || 'No reason provided';

  const embed = new EmbedBuilder()
    .setColor('#8B0000')
    .setTitle('🔥 Staff Member Fired')
    .addFields(
      { name: 'User', value: user.tag, inline: true },
      { name: 'Reason', value: reason, inline: false }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
