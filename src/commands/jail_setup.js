import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('jail_setup')
  .setDescription('Setup the jail system')
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#0099ff')
    .setTitle('⚙️ Jail System Setup')
    .setDescription('Jail system has been configured')
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
