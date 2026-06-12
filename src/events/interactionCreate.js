import { ChannelType } from 'discord.js';

export const name = 'interactionCreate';
export const once = false;

export async function execute(interaction, client) {
  if (!interaction.isChatInputCommand()) return;

  const command = interaction.client.commands.get(interaction.commandName);

  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`);
    return;
  }

  try {
    // Pass both interaction and client to command
    await command.execute(interaction, client);
  } catch (error) {
    console.error(error);
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({ content: '❌ There was an error executing this command!', ephemeral: true });
    } else {
      await interaction.reply({ content: '❌ There was an error executing this command!', ephemeral: true });
    }
  }
}
