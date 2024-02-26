import _ from 'lodash';

export const loading = state => _.get(state, 'user.loading', null);
export const userId = state => _.get(state, 'user.user.id', null);
