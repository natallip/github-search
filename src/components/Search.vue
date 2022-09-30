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
          @input="loadData"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: 'Search',

  data: () => ({
    items: [],
  }),

  computed: {
    ...mapState({
      isLoading: (state) => state.isLoading,
      repositories: (state) => state.repositories,
      searchData: (state) => state.search,
    }),

    search: {
      get() {
        return this.searchData;
      },
      set(data) {
        this.updateState({ property: 'search', value: data });
      },
    },
  },

  methods: {
    ...mapMutations({
      updateState: 'UPDATE_STATE_PROPERTY',
    }),
    ...mapActions({
      loadRepositories: 'GET_REPOSITORIES',
    }),
    async loadData() {
      await this.loadRepositories({ value: this.search, page: 1, perPage: 10 });
    },
  },
};
</script>
