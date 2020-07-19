import Save from '../../models/savedModel';

export default {
  Query: {
    saves: async () => await Save.find({}),
  },
  Mutation: {
    saveArticle: async (_, args) => {
      const { url, title } = args;
      const newSave = new Save({ title, url });
      return await newSave.save();
    },
    unsaveArticle: (_, args) => Save.findOneAndDelete({ url: args.url }),
  },
};
