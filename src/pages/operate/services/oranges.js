import { request, config } from '../../../utils';

const { api } = config

export function addOrange ( params ) {
  return request({
    url: api.orangeAuth,
    method: 'post',
    data: params,
  });
}

export function updateOrange( params ) {
  return request({
    url: api.orangeAuth,
    method: 'put',
    data: params,
  });
}

export function deleteOrange ( params ) {
  return request({
    url: api.orangeAuth,
    method: 'delete',
    data: params,
  });
}

export function getOrange ( params ) {
  return request({
    url: api.orange,
    method: 'get',
    data: params,
  });
}