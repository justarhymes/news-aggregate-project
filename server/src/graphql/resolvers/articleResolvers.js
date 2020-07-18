import Save from '../../models/savedModel';

export default {
  Query: {
    articles: (_, ___, { dataSources }) =>
      dataSources.articleAPI.getAllArticles(),
  },
  Article: {
    isSaved: async (article) => {
      const foundSave = await Save.findOne({ url: article.url });
      return foundSave ? true : false;
    },
  },
};
