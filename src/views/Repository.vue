<template>
  <v-card class="mx-auto my-12" max-width="400">
    <v-img height="250" :src="details.owner.avatar_url"></v-img>

    <v-card-title>{{ details.name }}</v-card-title>

    <v-card-text>
      <div class="mt-4 text-subtitle-1">Created: {{ formatDate(details.created_at) }}</div>

      <div class="mt-4 text-subtitle-1">Description {{ details.description }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title v-if="details.topics.length">Topics</v-card-title>

    <v-card-text>
      <v-chip-group column>
        <v-chip v-for="item in details.topics" :key="item">{{ item }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="backHome"> Back home </v-btn>

      <v-btn color="deep-purple lighten-2" text>
        <a class="button text-decoration-none" target="blank" :href="details.html_url">Repository</a>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import moment from 'moment';
import { mapState } from 'vuex';

export default {
  name: 'Repository',

  data: () => ({}),
  computed: {
    ...mapState({
      repositories: (state) => state.repositories,
    }),

    details() {
      return this.repositories.find((item) => item.id === Number(this.$route.params.id));
    },
  },

  methods: {
    formatDate(date) {
      return moment(date).format('DD MMMM YY');
    },
    backHome() {
      this.$router.push('/');
    },
  },
};
</script>
