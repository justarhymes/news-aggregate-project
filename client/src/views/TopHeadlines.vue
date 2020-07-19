<template>
  <div class="page">
    <el-row
      type="flex"
      v-loading.fullscreen.lock="$apollo.queries.articles.loading"
      :gutter="20"
    >
      <el-col :md="12" v-for="article in articles" :key="article.url">
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <el-button
            class="el-card__save"
            :icon="article.isSaved ? 'el-icon-star-on' : 'el-icon-star-off'"
            @click="
              toggleArticleSaveState(
                article.title,
                article.url,
                article.isSaved
              )
            "
            circle
            size="small"
          ></el-button>
          <a class="el-card__link" :href="article.url" target="_blank">
            <el-image fit="cover" :src="article.image">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            <div class="el-card__content">
              <div class="top">
                <h3>{{ article.title }}</h3>
                <el-tag size="mini">{{ article.source.name }}</el-tag>
                <p v-if="article.description">{{ article.description }}</p>
              </div>
              <div class="bottom clearfix">
                <time class="time">
                  {{ moment(article.publishedAt).format("LLLL") }}
                </time>
              </div>
            </div>
          </a>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import gql from "graphql-tag";
import moment from "moment";

const articleQuery = gql`
  query {
    articles {
      title
      source {
        name
      }
      description
      url
      image
      publishedAt
      content
      isSaved
    }
  }
`;

export default {
  name: "Top",
  data() {
    return {
      title: "",
      url: null
    };
  },
  apollo: {
    articles: {
      query: articleQuery,
      pollInterval: 300
    }
  },
  methods: {
    moment() {
      return moment();
    },
    toggleArticleSaveState(title, url, isSaved) {
      if (isSaved) {
        this.unsaveArticle(url);
      } else {
        this.saveArticle(title, url);
      }
    },
    saveArticle(title, url) {
      this.$apollo.mutate({
        mutation: gql`
          mutation saveArticle($title: String!, $url: String!) {
            saveArticle(title: $title, url: $url) {
              title
              url
            }
          }
        `,
        variables: {
          title: title,
          url: url
        }
      });
    },
    unsaveArticle(url) {
      this.$apollo.mutate({
        mutation: gql`
          mutation unsaveArticle($url: String!) {
            unsaveArticle(url: $url) {
              title
              url
            }
          }
        `,
        variables: {
          url: url
        }
      });
      //this.$apollo.queries.articles.refetch();
    }
  }
};
</script>

<style scoped lang="scss">
.el-row {
  flex-wrap: wrap;
  margin-top: -10px;
  margin-bottom: -10px;
}
.el-col {
  padding-top: 10px;
  padding-bottom: 10px;
}
.el-card {
  height: 100%;
  position: relative;

  .el-card__content {
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      margin-bottom: 5px;
    }
  }
}
.el-card::v-deep .el-card__body,
.el-card__link {
  height: 100%;
}
.el-card__save {
  position: absolute;
  top: 10px;
  right: 15px;
  z-index: 10;
}
.el-card__link {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #999;
}
.el-card::v-deep .el-card__content {
  flex-grow: 1;
}
.el-image {
  height: 250px;
  width: 100%;

  &::v-deep .image-slot {
    background: #f5f7fa;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: #909399;
    font-size: 2.75rem;
  }
}
</style>
