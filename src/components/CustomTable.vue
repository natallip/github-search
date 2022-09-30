<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-data-table
          item-key="id"
          :items="rows"
          :headers="headers"
          :loading="isLoading"
          :server-items-length="totalCount"
          loading-text="Loading... Please wait"
          :options="options"
          :items-per-page="10"
          @click:row="selectRow"
          @update:page="getNextPage"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'CustomTable',

  props: {
    rows: {
      type: Array,
      default: () => [],
    },

    headers: {
      type: Array,
      default: () => [],
    },
  },

  data: () => ({
    options: {
      page: 1,
      itemsPerPage: 10,
    },
  }),

  computed: {
    ...mapState({
      isLoading: (state) => state.isLoading,
      repositories: (state) => state.repositories,
      totalCount: (state) => state.totalCount,
      search: (state) => state.search,
    }),

    items() {
      return this.repositories;
    },
  },

  methods: {
    ...mapActions({
      loadRepositories: 'GET_REPOSITORIES',
    }),
    selectRow(item) {
      this.$router.push(`/repository/${item.id}`);
    },
    async getNextPage(page) {
      this.options.page = page;
      await this.loadRepositories({ value: this.search, page: page, perPage: this.options.itemsPerPage });
    },
  },
};
</script>

<style>
tr {
  cursor: pointer;
}
.v-data-footer__select {
  display: none;
}
</style>
