import * as filters from './filters.functions';

const VueFilters = {
  install: Vue => {
    Object.keys(filters)
      .forEach(f => Vue.filter(f, filters[f]));
  }
};

export default VueFilters;
