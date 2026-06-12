export const name = 'guildDelete';
export const once = false;

export async function execute(guild, client) {
  console.log(`❌ Bot left server: ${guild.name} (${guild.id})`);
  console.log(`📊 Now serving ${client.guilds.cache.size} servers`);
}
