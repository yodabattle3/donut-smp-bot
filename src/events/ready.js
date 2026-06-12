import { EmbedBuilder } from 'discord.js';

export const name = 'clientReady';
export const once = true;

export async function execute(client) {
  console.log(`✅ Bot logged in as ${client.user.tag}`);
  console.log(`📊 Serving ${client.guilds.cache.size} servers`);
  
  client.user.setActivity('Donut SMP Servers', { type: 'WATCHING' });
  
  // Log startup to all guilds
  for (const guild of client.guilds.cache.values()) {
    console.log(`  - ${guild.name} (${guild.memberCount} members)`);
  }
}
