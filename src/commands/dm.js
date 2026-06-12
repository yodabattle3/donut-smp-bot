import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('dm')
  .setDescription('Send a DM to a user')
  .addUserOption(option => option.setName('user').setDescription('User to message').setRequired(true))
  .addStringOption(option => option.setName('message').setDescription('Message content').setRequired(true));

export async function execute(interaction) {
  const user = interaction.options.getUser('user');
  const message = interaction.options.getString('message');

  try {
    await user.send(message);
    await interaction.reply({ content: '✅ DM sent!', ephemeral: true });
  } catch (error) {
    await interaction.reply({ content: '❌ Could not send DM!', ephemeral: true });
  }
}
