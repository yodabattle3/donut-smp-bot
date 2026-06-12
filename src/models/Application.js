// Application schema for whitelist applications
export const applicationSchema = {
  applicationId: String,
  userId: String,
  guildId: String,
  ign: String,
  age: Number,
  experience: String,
  status: String, // pending, accepted, denied
  submittedAt: Date,
  reviewedAt: Date,
  reviewedBy: String,
};
