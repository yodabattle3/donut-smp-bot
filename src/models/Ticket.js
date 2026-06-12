// Ticket schema for support tickets
export const ticketSchema = {
  ticketId: String,
  channelId: String,
  userId: String,
  guildId: String,
  createdAt: Date,
  claimedBy: String,
  status: String, // open, claimed, closed
  blacklisted: Boolean,
};
