<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-data-table
          item-key="id"
          :items="rows"
          :headers="headers"
          :loading="isLoading"
          loading-text="Loading... Please wait"
          @click:row="selectRow"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

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
  }),

  computed: {
    ...mapState({
      isLoading: (state) => state.isLoading,
      repositories: (state) => state.repositories,
    }),

    items() {
      return this.repositories;
    },
  },

  methods: {
    selectRow(item) {
      this.$router.push(`/repository/${item.id}`);
    },
  },
};
</script>

<style>
tr {
  cursor: pointer;
}
</style>
