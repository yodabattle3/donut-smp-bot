import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ticket_rename')
  .setDescription('Rename a ticket')
  .addStringOption(option => option.setName('newname').setDescription('New ticket name').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

export async function execute(interaction) {
  const newName = interaction.options.getString('newname');

  const embed = new EmbedBuilder()
    .setColor('#00FF00')
    .setTitle('✅ Ticket Renamed')
    .addFields(
      { name: 'New Name', value: newName, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
