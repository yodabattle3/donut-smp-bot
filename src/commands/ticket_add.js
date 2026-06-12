import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ticket_add')
  .setDescription('Add a user to a ticket')
  .addUserOption(option => option.setName('user').setDescription('User to add').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');

  const embed = new EmbedBuilder()
    .setColor('#00FF00')
    .setTitle('✅ User Added to Ticket')
    .addFields(
      { name: 'Added User', value: user.tag, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
