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
      const repositories = await RepositoryService.getRepositories(payload);
      commit({
        type: 'UPDATE_STATE_PROPERTY',
        property: 'filteredRepositories',
        value: repositories,
      });
      commit({
        type: 'UPDATE_STATE_PROPERTY',
        property: 'repositories',
        value: repositories,
      });
      commit({
        type: 'UPDATE_STATE_PROPERTY',
        property: 'search',
        value: payload,
      });
      commit({
        type: 'UPDATE_STATE_PROPERTY',
        property: 'isLoading',
        value: false,
      });
    },
  },
});
