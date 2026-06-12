import mongoose from 'mongoose';

const scammerSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  guildId: String,
  username: String,
  proof: String,
  reason: String,
  reportedBy: String,
  reportedAt: {
    type: Date,
    default: Date.now,
  },
});

scammerSchema.index({ userId: 1, guildId: 1 });

export const Scammer = mongoose.model('Scammer', scammerSchema);
