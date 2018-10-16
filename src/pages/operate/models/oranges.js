import * as service from '../services/oranges'
export default {

  namespace: 'oranges',

  state: {
    dataSource: [],
    columns: [{ title: '标题', dataIndex: 'title', key: 'title' }, 
      { title: '图片', dataIndex: 'url', key: 'url' }, 
      { title: '描述', dataIndex: 'desc', key: 'desc' },
      { title: '创建时间', dataIndex: 'createTime', key: 'createTime', sorter: (a, b) => a.createTime - b.createTime },
      { title: '修改时间', dataIndex: 'modifyTime', key: 'modifyTime', sorter: (a, b) => a.modifyTime - b.modifyTime },
      { title: '操作', dataIndex: 'operate', key: 'operate' },
    ],
    pageSize: 10,
    current: 1,
    total: 4,
    modalVisible: false,
    modalTitle: '',
    modifyData: {},
    orderBy: 'modifyTime',
    order: -1,
    fullVisible: false,
    url:''
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, search }) => {
        if(pathname === '/operate'){
          dispatch({type:'query_oranges'})
        }
      });
    },
  },

  effects: {
    *query_oranges({ payload }, { call, put, select }) {
      const { current, pageSize, orderBy, order } = yield select(_ => _.oranges)
      let data = yield call(service.getOrange, { current, pageSize, orderBy, order })
      if(data.code === 1){
        yield put({type:'updateState',payload:{dataSource:data.list.map((item, key)=>{item.key = key; return item}),total:data.total}})
      }
    },
    *add({ payload }, { call, put }) {
      let data = yield call(service.addOrange, payload.values)
      if(data.code === 1){
        yield put({type:'query_oranges'})
      }
      return data
    },
    *update({ payload }, { call, put }) {
      let data = yield call(service.updateOrange, payload.values)
      if(data.code === 1){
        yield put({type:'query_oranges'})
      }
      return data
    },
    *delete({ payload }, { call, put }) {
      let data = yield call(service.deleteOrange, payload)
      if(data.code === 1){
        yield put({type:'query_oranges'})
      }
      return data
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    updateState(state,  { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },

};
