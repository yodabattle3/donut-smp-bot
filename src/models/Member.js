import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  guildId: {
    type: String,
    required: true,
  },
  username: String,
  ign: String,
  role: String,
  warnings: {
    type: Number,
    default: 0,
  },
  strikes: {
    type: Number,
    default: 0,
  },
  loaStatus: {
    type: Boolean,
    default: false,
  },
  loaStart: Date,
  loaEnd: Date,
  joinDate: Date,
  activityScore: {
    type: Number,
    default: 0,
  },
  staffDebt: {
    type: Number,
    default: 0,
  },
  vouchCount: {
    type: Number,
    default: 0,
  },
  blacklisted: {
    type: Boolean,
    default: false,
  },
  blacklistedReason: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

memberSchema.index({ userId: 1, guildId: 1 }, { unique: true });

export const Member = mongoose.model('Member', memberSchema);
