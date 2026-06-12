import mongoose from 'mongoose';

const guildConfigSchema = new mongoose.Schema({
  guildId: {
    type: String,
    required: true,
    unique: true,
  },
  guildName: String,
  prefix: {
    type: String,
    default: '/',
  },
  logsChannel: String,
  modChannel: String,
  ticketCategory: String,
  ticketCounter: {
    type: Number,
    default: 0,
  },
  applicationOpen: {
    type: Boolean,
    default: false,
  },
  staffRole: String,
  modRole: String,
  muteRole: String,
  jailRole: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const GuildConfig = mongoose.model('GuildConfig', guildConfigSchema);
