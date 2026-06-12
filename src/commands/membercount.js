import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('membercount')
  .setDescription('Get the total member count');

export async function execute(interaction) {
  const members = await interaction.guild.members.fetch();
  const humanMembers = members.filter(m => !m.user.bot).size;
  const botMembers = members.filter(m => m.user.bot).size;

  const embed = new EmbedBuilder()
    .setColor('#0099ff')
    .setTitle('📊 Member Count')
    .addFields(
      { name: 'Total Members', value: `${members.size}`, inline: true },
      { name: 'Humans', value: `${humanMembers}`, inline: true },
      { name: 'Bots', value: `${botMembers}`, inline: true }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
