import { request, config } from '../../utils';

const { api } = config

export function addArticle ( params ) {
  return request({
    url: api.article2,
    method: 'post',
    data: params,
  });
}

export function updateArticle ( params ) {
  return request({
    url: api.article2,
    method: 'put',
    data: params,
  });
}

export function deleteArticle ( params ) {
  return request({
    url: api.article2,
    method: 'delete',
    data: params,
  });
}

export function getArticle ( params ) {
  return request({
    url: api.article,
    method: 'get',
    data: params,
  });
}