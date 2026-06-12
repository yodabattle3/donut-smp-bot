import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('set_ign')
  .setDescription('Set a member\'s IGN')
  .addUserOption(option => option.setName('user').setDescription('User to set IGN for').setRequired(true))
  .addStringOption(option => option.setName('ign').setDescription('Minecraft IGN').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');
  const ign = interaction.options.getString('ign');

  const embed = new EmbedBuilder()
    .setColor('#00FF00')
    .setTitle('✅ IGN Set')
    .addFields(
      { name: 'User', value: user.tag, inline: true },
      { name: 'IGN', value: ign, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
