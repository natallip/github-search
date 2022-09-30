<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-text-field
          v-model.lazy="search"
          autofocus
          outlined
          clearable
          clear-icon="$clear"
          placeholder="Search..."
          loading="isLoading"
          @input="loadRepositories"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Search',

  data: () => ({
    items: [],
  }),

  computed: {
    ...mapState({
      isLoading: (state) => state.isLoading,
      repositories: (state) => state.repositories,
      search: (state) => state.search,
    }),
  },

  methods: {
    ...mapActions({
      loadRepositories: 'GET_REPOSITORIES',
    }),
  },
};
</script>
