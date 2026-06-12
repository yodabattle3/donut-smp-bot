import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  ticketId: {
    type: String,
    required: true,
    unique: true,
  },
  channelId: String,
  userId: String,
  guildId: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  closedAt: Date,
  claimedBy: String,
  claimedAt: Date,
  status: {
    type: String,
    enum: ['open', 'claimed', 'closed'],
    default: 'open',
  },
  blacklisted: {
    type: Boolean,
    default: false,
  },
  reason: String,
});

ticketSchema.index({ guildId: 1, userId: 1 });

export const Ticket = mongoose.model('Ticket', ticketSchema);
