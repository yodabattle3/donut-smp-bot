import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  applicationId: {
    type: String,
    required: true,
    unique: true,
  },
  userId: String,
  guildId: String,
  ign: String,
  age: Number,
  experience: String,
  status: {
    type: String,
    enum: ['pending', 'accepted', 'denied'],
    default: 'pending',
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  reviewedAt: Date,
  reviewedBy: String,
  reviewNotes: String,
});

applicationSchema.index({ guildId: 1, userId: 1 });

export const Application = mongoose.model('Application', applicationSchema);
