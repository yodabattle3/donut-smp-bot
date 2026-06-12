import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('userinfo')
  .setDescription('Get information about a user')
  .addUserOption(option => option.setName('user').setDescription('User to get info about').setRequired(false));

export async function execute(interaction) {
  const user = interaction.options.getUser('user') || interaction.user;
  const member = await interaction.guild.members.fetch(user.id).catch(() => null);

  const embed = new EmbedBuilder()
    .setColor('#0099ff')
    .setTitle('👤 User Information')
    .setThumbnail(user.avatarURL({ dynamic: true, size: 512 }))
    .addFields(
      { name: 'Username', value: user.tag, inline: true },
      { name: 'ID', value: user.id, inline: true },
      { name: 'Account Created', value: `<t:${Math.floor(user.createdTimestamp / 1000)}:F>`, inline: true },
      { name: 'Joined Server', value: member ? `<t:${Math.floor(member.joinedTimestamp / 1000)}:F>` : 'N/A', inline: true },
      { name: 'Roles', value: member ? member.roles.cache.map(r => r.name).join(', ') || 'None' : 'N/A', inline: false }
    )
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
