import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('help')
  .setDescription('Shows all available commands');

export async function execute(interaction) {
  const embed = new EmbedBuilder()
    .setColor('#FF69B4')
    .setTitle('🎮 Donut SMP Bot - Command Help')
    .setDescription('Here are all available commands:')
    .addFields(
      { name: '👤 Member Management', value: '`promote` `demote` `roleadd` `role remove` `nickreset` `rename` `membervisibility`', inline: false },
      { name: '⚠️ Moderation', value: '`warn` `remove warn` `strike` `remove_strike` `ban` `unban` `kick` `timeout` `untimeout` `jail add` `jail remove` `mute`', inline: false },
      { name: '🎫 Tickets', value: '`ticket open` `ticket close` `ticket claim` `ticket unclaim` `ticket transfer` `ticket rename` `ticket add` `ticket remove` `ticket blacklist` `ticket unblacklist`', inline: false },
      { name: '📝 Applications', value: '`open apply` `close apply` `complete_build` `apps post_apply` `apps blacklist` `apps unblacklist`', inline: false },
      { name: '💰 Economy', value: '`payments` `staff debt add` `staff debt remove` `staff debt check` `staff debt pay` `staff_vouch`', inline: false },
      { name: '📊 Activity', value: '`activitycheck` `activityreset` `staffactivity` `communitycheck` `membercount`', inline: false },
      { name: '🔐 Security', value: '`scammer add` `scammer remove` `scammer report` `loa` `endloa` `forceendloa`', inline: false },
      { name: '📢 Announcements', value: '`ad` `ad_set` `paid_ad` `paidad_set` `funfact` `poll`', inline: false },
      { name: '🛠️ Admin Tools', value: '`slowmode` `lock` `unlock` `stick` `unstick` `purge` `say` `embed` `clear_all_strikes`', inline: false },
    )
    .setFooter({ text: 'Use /help <command> for more information' });

  await interaction.reply({ embeds: [embed], ephemeral: true });
}
