import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('apps_post_apply')
  .setDescription('Post the application form')
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#0099ff')
    .setTitle('📝 Application Form')
    .setDescription('Please fill out this application form to join our server!')
    .addFields(
      { name: 'IGN', value: 'Your Minecraft username', inline: false },
      { name: 'Age', value: 'Your age', inline: false },
      { name: 'Experience', value: 'SMP experience', inline: false }
    )
    .setTimestamp();

  await interaction.channel.send({ embeds: [embed] });
  await interaction.reply({ content: '✅ Application form posted!', ephemeral: true });
}
