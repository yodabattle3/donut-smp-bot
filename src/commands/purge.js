import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('purge')
  .setDescription('Delete multiple messages')
  .addIntegerOption(option => option.setName('amount').setDescription('Number of messages to delete').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages);

export async function execute(interaction) {
  const amount = interaction.options.getInteger('amount');

  if (amount > 100) {
    return interaction.reply({ content: '❌ Can only delete up to 100 messages at a time!', ephemeral: true });
  }

  try {
    const deleted = await interaction.channel.bulkDelete(amount);

    const embed = new EmbedBuilder()
      .setColor('#FF8C00')
      .setTitle('🗑️ Messages Deleted')
      .addFields(
        { name: 'Amount', value: `${deleted.size} messages`, inline: true }
      )
      .setTimestamp();

    const reply = await interaction.reply({ embeds: [embed], ephemeral: true });
    setTimeout(() => reply.delete(), 3000);
  } catch (error) {
    await interaction.reply({ content: '❌ Could not delete messages!', ephemeral: true });
  }
}
