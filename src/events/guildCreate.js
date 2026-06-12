export const name = 'guildCreate';
export const once = false;

export async function execute(guild, client) {
  console.log(`✅ Bot joined new server: ${guild.name} (${guild.id})`);
  console.log(`📊 Now serving ${client.guilds.cache.size} servers`);
  
  try {
    const owner = await guild.fetchOwner();
    const embed = new EmbedBuilder()
      .setColor('#00FF00')
      .setTitle('👋 Welcome to Donut SMP Bot!')
      .setDescription('Thank you for adding our bot to your server!')
      .addFields(
        { name: 'Getting Started', value: 'Use `/help` to see all available commands', inline: false },
        { name: 'Setup', value: 'Configure your server with role and channel settings', inline: false },
        { name: 'Support', value: 'Join our support server for help', inline: false }
      )
      .setTimestamp();
    
    await owner.send({ embeds: [embed] }).catch(() => {});
  } catch (error) {
    console.error(`Error welcoming new guild ${guild.id}:`, error);
  }
}
