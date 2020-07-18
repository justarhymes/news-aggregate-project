import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

const SaveSchema = new Schema({
  title: { type: String },
  url: {
    type: String,
  },
});

SaveSchema.plugin(timestamps);

SaveSchema.index({ createdAt: 1, updatedAt: 1 });

export default mongoose.model('Save', SaveSchema);
