import axios from 'axios';

export default {
  async getRepositories(value) {
    const url = 'https://api.github.com/search/repositories';

    try {
      const { data } = await axios.get(url, {
        params: { q: value.value, sort: 'stars', order: 'desc', page: value.page, per_page: value.perPage },
      });

      return data;
    } catch (e) {
      console.log(e);
      throw Error(e);
    }
  },
};
