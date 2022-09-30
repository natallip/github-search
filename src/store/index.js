import Vue from 'vue';
import Vuex from 'vuex';
import RepositoryService from '@/services/RepositoryService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    repositories: [],
    isLoading: false,
    filteredRepositories: [],
    search: '',
    totalCount: 0,
    page: 1,
    perPage: 10,
  },
  mutations: {
    UPDATE_STATE_PROPERTY(state, { property, value }) {
      Vue.set(state, property, value);
    },
  },
  actions: {
    async GET_REPOSITORIES({ commit }, payload) {
      commit({
        type: 'UPDATE_STATE_PROPERTY',
        property: 'isLoading',
        value: true,
      });

      const data = await RepositoryService.getRepositories({
        value: payload.value,
        page: payload.page,
        perPage: payload.perPage,
      });

      commit({
        type: 'UPDATE_STATE_PROPERTY',
        property: 'filteredRepositories',
        value: data.items,
      });
      commit({
        type: 'UPDATE_STATE_PROPERTY',
        property: 'repositories',
        value: data.items,
      });
      commit({
        type: 'UPDATE_STATE_PROPERTY',
        property: 'search',
        value: payload.value,
      });
      commit({
        type: 'UPDATE_STATE_PROPERTY',
        property: 'totalCount',
        value: data.total_count,
      });
      commit({
        type: 'UPDATE_STATE_PROPERTY',
        property: 'isLoading',
        value: false,
      });
    },
  },
});
