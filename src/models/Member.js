// Member schema for storing user data
export const memberSchema = {
  userId: String,
  guildId: String,
  username: String,
  ign: String,
  role: String,
  warnings: Number,
  strikes: Number,
  loaStatus: Boolean,
  loaStart: Date,
  loaEnd: Date,
  joinDate: Date,
  activityScore: Number,
  staffDebt: Number,
  vouchCount: Number,
  blacklisted: Boolean,
};
