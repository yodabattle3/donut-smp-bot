import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('poll')
  .setDescription('Create a poll')
  .addStringOption(option => option.setName('question').setDescription('Poll question').setRequired(true))
  .addStringOption(option => option.setName('options').setDescription('Options separated by commas').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  const question = interaction.options.getString('question');
  const options = interaction.options.getString('options').split(',').map(o => o.trim()).slice(0, 10);

  const reactions = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
  const optionText = options.map((opt, i) => `${reactions[i]} ${opt}`).join('\n');

  const embed = new EmbedBuilder()
    .setColor('#FFD700')
    .setTitle('📊 Poll')
    .setDescription(question)
    .addFields(
      { name: 'Options', value: optionText, inline: false }
    )
    .setTimestamp();

  const message = await interaction.channel.send({ embeds: [embed] });
  for (let i = 0; i < options.length; i++) {
    await message.react(reactions[i]);
  }

  await interaction.reply({ content: '✅ Poll created!', ephemeral: true });
}
