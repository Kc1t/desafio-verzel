import mongoose, { Document, Schema } from 'mongoose';

export interface IList extends Document {
  user: mongoose.Schema.Types.ObjectId;
  name: string;
  description: string;
  movies: Array<{
    id: number;
    title: string;
    poster_path: string;
  }>;
}

const listSchema = new Schema<IList>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  description:{ type: String, required: true },
  movies: {
    type: [
      {
        id: Number,
        title: String,
        poster_path: String,
      },
    ],
    default: [],
  },
});

const List = mongoose.model<IList>('List', listSchema);

export default List;
