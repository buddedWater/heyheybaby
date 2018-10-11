import { request, config } from '../../utils';

const { api } = config

export function getRecords ( params ) {
  return request({
    url: api.record,
    method: 'get',
    data: params,
  });
}