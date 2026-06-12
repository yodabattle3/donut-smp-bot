import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('unstick')
  .setDescription('Unstick a message from the channel')
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages);

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#FF6347')
    .setTitle('❌ Message Unstickied')
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
