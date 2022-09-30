<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <FilterItem v-for="filter in filters" :key="filter.name" :filter="filter" :items="items" @filter="setFilters" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex';
import FilterItem from '@/components/FilterItem';

export default {
  name: 'FilterList',

  components: {
    FilterItem,
  },

  props: {
    filters: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    ...mapMutations({
      updateState: 'UPDATE_STATE_PROPERTY',
    }),

    setFilters(value) {
      this.$emit('filters', value);
    },
  },
};
</script>
