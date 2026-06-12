import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('paidad_set')
  .setDescription('Set paid advertisement settings')
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#FFD700')
    .setTitle('⚙️ Paid Ad Setup')
    .setDescription('Paid ad system configured')
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
