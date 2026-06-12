import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('scammer_add')
  .setDescription('Add a user to the scammer list')
  .addUserOption(option => option.setName('user').setDescription('User to add').setRequired(true))
  .addStringOption(option => option.setName('proof').setDescription('Proof of scamming').setRequired(false))
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

export async function execute(interaction) {
  const user = interaction.options.getUser('user');
  const proof = interaction.options.getString('proof') || 'No proof provided';

  const embed = new EmbedBuilder()
    .setColor('#8B0000')
    .setTitle('🚨 Scammer Added')
    .addFields(
      { name: 'User', value: user.tag, inline: true },
      { name: 'Proof', value: proof, inline: false }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
