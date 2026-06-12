import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('funfact')
  .setDescription('Share a fun fact');

export async function execute(interaction) {
  const funFacts = [
    'Did you know? Bees can recognize human faces!',
    'Fun fact: Honey never expires',
    'Did you know? The Great Wall of China is visible from space',
    'Fun fact: Octopuses have three hearts',
    'Did you know? Sloths only poop once a week'
  ];

  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];

  const embed = new EmbedBuilder()
    .setColor('#FFD700')
    .setTitle('💡 Fun Fact')
    .setDescription(randomFact)
    .setTimestamp();

  await interaction.channel.send({ embeds: [embed] });
  await interaction.reply({ content: '✅ Fun fact posted!', ephemeral: true });
}
