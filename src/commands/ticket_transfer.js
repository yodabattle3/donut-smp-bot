import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ticket_transfer')
  .setDescription('Transfer a ticket to another staff member')
  .addUserOption(option => option.setName('user').setDescription('Staff member to transfer to').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');

  const embed = new EmbedBuilder()
    .setColor('#0099ff')
    .setTitle('🔄 Ticket Transferred')
    .addFields(
      { name: 'Transferred To', value: user.tag, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
