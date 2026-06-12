import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('say')
  .setDescription('Make the bot say something')
  .addStringOption(option => option.setName('message').setDescription('Message to say').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  const message = interaction.options.getString('message');

  await interaction.channel.send(message);
  await interaction.reply({ content: '✅ Message sent!', ephemeral: true });
}
