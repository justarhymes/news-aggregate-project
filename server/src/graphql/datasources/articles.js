import { RESTDataSource } from 'apollo-datasource-rest';

class ArticleAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://newsapi.org/v2/';
  }

  articleReducer(article) {
    return {
      author: article.author,
      source: {
        id: article.source.id,
        name: article.source.name,
      },
      title: article.title,
      description: article.description,
      url: article.url,
      image: article.urlToImage,
      publishedAt: article.publishedAt,
      content: article.content,
    };
  }

  async getAllArticles() {
    const response = await this.get('top-headlines', {
      country: 'us',
      apiKey: process.env.NEWSAPI_KEY,
    });

    return Array.isArray(response.articles)
      ? response.articles.map((article) => this.articleReducer(article))
      : [];
  }
}

export default ArticleAPI;
