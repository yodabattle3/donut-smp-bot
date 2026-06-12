import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('sus_end')
  .setDescription('End a suspicious activity investigation')
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers);

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#00FF00')
    .setTitle('✅ Investigation Ended')
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
