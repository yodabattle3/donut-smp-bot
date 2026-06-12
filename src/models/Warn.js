import mongoose from 'mongoose';

const warnSchema = new mongoose.Schema({
  userId: String,
  guildId: String,
  username: String,
  reason: String,
  warnedBy: String,
  warnedAt: {
    type: Date,
    default: Date.now,
  },
});

warnSchema.index({ userId: 1, guildId: 1 });

export const Warn = mongoose.model('Warn', warnSchema);
