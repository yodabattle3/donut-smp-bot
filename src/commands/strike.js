import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('strike')
  .setDescription('Give a strike to a member')
  .addUserOption(option => option.setName('user').setDescription('User to strike').setRequired(true))
  .addStringOption(option => option.setName('reason').setDescription('Reason for strike').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');
  const reason = interaction.options.getString('reason');

  const embed = new EmbedBuilder()
    .setColor('#FF0000')
    .setTitle('⚡ Strike Given')
    .addFields(
      { name: 'User', value: `${user.tag}`, inline: true },
      { name: 'Reason', value: reason, inline: true },
      { name: 'Given By', value: interaction.user.tag, inline: true }
    )
    .setTimestamp();

  try {
    await user.send({ embeds: [embed] });
  } catch (e) {
    console.log('Could not DM user');
  }

  await interaction.reply({ embeds: [embed] });
}
