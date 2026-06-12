import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('stick')
  .setDescription('Sticky a message to the channel')
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages);

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#FFD700')
    .setTitle('📌 Message Stickied')
    .setDescription('This message will stay at the top')
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
