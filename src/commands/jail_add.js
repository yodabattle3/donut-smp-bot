import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('jail_add')
  .setDescription('Put a member in jail')
  .addUserOption(option => option.setName('user').setDescription('User to jail').setRequired(true))
  .addStringOption(option => option.setName('reason').setDescription('Reason').setRequired(false))
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');
  const reason = interaction.options.getString('reason') || 'No reason provided';

  const embed = new EmbedBuilder()
    .setColor('#8B0000')
    .setTitle('🔐 Member Jailed')
    .addFields(
      { name: 'User', value: user.tag, inline: true },
      { name: 'Reason', value: reason, inline: false }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
