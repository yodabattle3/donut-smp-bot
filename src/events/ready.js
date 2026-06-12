export const name = 'clientReady';
export const once = true;

export async function execute(client) {
  console.log(`✅ Bot logged in as ${client.user.tag}`);
  client.user.setActivity('Donut SMP Servers', { type: 'WATCHING' });
}
