<template>
  <div class="page">
    <el-card
      shadow="never"
      v-loading.fullscreen.lock="$apollo.queries.saves.loading"
    >
      <div slot="header" class="clearfix">
        <span>Saved Headlines</span>
      </div>
      <ul class="text-list">
        <li v-for="save in saves" :key="save.url" class="text-list-item">
          <a :href="save.url" target="_blank">{{ save.title }}</a>
          <el-button @click="unsaveArticle(save.url)" size="mini" round>
            Remove
          </el-button>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
import gql from "graphql-tag";

const saveQuery = gql`
  query {
    saves {
      title
      url
    }
  }
`;

export default {
  name: "Saved",
  apollo: {
    saves: {
      query: saveQuery,
      pollInterval: 300
    }
  },
  methods: {
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
    }
  }
};
</script>

<style scoped lang="scss">
.text-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.text-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-bottom: solid 1px #e6e6e6;

  &:first-child {
    padding-top: 0;
  }
}
</style>
