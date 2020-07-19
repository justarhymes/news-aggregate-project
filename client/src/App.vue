<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <table border="1" width="100%" style="border-collapse: collapse;">
      <tr>
        <th>Title</th>
        <th>Source</th>
        <th>Url</th>
      </tr>

      <tr v-for="article in articles" :key="article.url">
        <td>{{ article.title }}</td>
        <td>{{ article.source.name }}</td>
        <td>{{ article.url }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import gql from "graphql-tag";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      title: null,
      url: null
    };
  },
  apollo: {
    articles: gql`
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
    `
  },
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
