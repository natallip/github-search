<template>
  <div class="home">
    <Search />
    <FilterList v-if="repositories.length" :filters="filters" :items="repositories" @filters="filterRepositories" />
    <CustomTable is-loading="isLoading" :rows="filteredRepositories" :headers="headers" />
  </div>
</template>

<script>
import Search from '@/components/Search';
import CustomTable from '@/components/CustomTable';
import FilterList from '@/components/FilterList';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Home',
  components: {
    CustomTable,
    Search,
    FilterList,
  },
  data: () => ({
    filters: [
      { name: 'language', title: 'Language', type: 'autocomplete', options: ['Vue', 'JavaScript', 'TypeScript'] },
    ],
    headers: [
      {
        text: 'Name',
        value: 'name',
        textfield: true,
      },
      {
        text: 'Owner',
        value: 'owner.login',
        textfield: true,
      },
      {
        text: 'Language',
        value: 'language',
        textfield: true,
      },
      {
        text: 'Forks',
        value: 'forks_count',
        textfield: true,
      },
      {
        text: 'Open issues',
        value: 'open_issues_count',
        textfield: true,
      },
    ],
  }),

  computed: {
    ...mapState({
      isLoading: (state) => state.isLoading,
      repositories: (state) => state.repositories,
      filteredRepositories: (state) => state.filteredRepositories,
    }),
  },

  methods: {
    ...mapMutations({
      updateState: 'UPDATE_STATE_PROPERTY',
    }),

    filterRepositories(filter) {
      if (!filter.value) {
        this.updateState({
          property: 'filteredRepositories',
          value: this.repositories,
        });
        return;
      }

      const data = this.repositories.filter((item) => item[filter.name] === filter.value);

      this.updateState({
        property: 'filteredRepositories',
        value: data,
      });
    },
  },
};
</script>
