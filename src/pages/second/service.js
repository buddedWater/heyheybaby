import { request, config } from '../../utils';

const { api } = config

export function getArticle ( params ) {
  return request({
    url: api.article,
    method: 'get',
    data: params,
  });
}