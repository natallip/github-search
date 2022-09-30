import axios from 'axios';

export default {
  async getRepositories(value) {
    const url = 'https://api.github.com/search/repositories';

    if (!value.length) return;

    try {
      const {
        data: { items },
      } = await axios.get(url, { params: { q: value, sort: 'stars', order: 'desc' } });

      return items;
    } catch (e) {
      throw Error(e);
      console.log(e);
    }
  },
};
