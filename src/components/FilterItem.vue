<template>
  <v-row class="d-flex align-center justify-space-between">
    <v-col class="flex-grow-0">
      <span class="mr-6">{{ filter.title }}</span>
    </v-col>
    <v-col class="flex-grow-1">
      <v-autocomplete
        v-if="filter.type === 'autocomplete'"
        v-model="value"
        :items="filter.options"
        no-data-text="no data"
        clearable
        clear-icon="$clear"
        @change="setFilter"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'FilterItem',

  props: {
    filter: {
      type: Object,
      default: () => ({}),
    },
    items: {
      type: Array,
      default: () => [],
    },
  },

  data: () => ({
    value: '',
  }),

  methods: {
    setFilter() {
      this.$emit('filter', { name: this.filter.name, value: this.value });
    },
  },
};
</script>
