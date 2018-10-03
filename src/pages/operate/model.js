import * as service from './service'
export default {

  namespace: 'operate',

  state: {
    dataSource: [],

    columns: [{ title: '题目', dataIndex: 'title', key: 'title' }, 
      { title: '作者', dataIndex: 'author', key: 'author' }, 
      { title: '内容', dataIndex: 'text', key: 'text', width: 150 },
      { title: '创建时间', dataIndex: 'createTime', key: 'createTime', sorter: (a, b) => a.createTime - b.createTime },
      { title: '修改时间', dataIndex: 'modifyTime', key: 'modifyTime', sorter: (a, b) => a.modifyTime - b.modifyTime },
      { title: '操作', dataIndex: 'operate', key: 'operate' },
    ],
    pageSize: 10,
    current: 1,
    total: 4,
    modalVisible: false,
    moalTitle: '',
    modifyData: {},
    orderBy: 'modifyTime',
    order: -1
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, search }) => {
        if(pathname === '/operate'){
          dispatch({type:'query_article'})
        }
      });
    },
  },

  effects: {
    *query_article({ payload }, { call, put, select }) {
      const { current, pageSize, orderBy, order } = yield select(_ => _.operate)
      let data = yield call(service.getArticle, { current, pageSize, orderBy, order })
      if(data.code === 1){
        yield put({type:'updateState',payload:{dataSource:data.list.map((item, key)=>{item.key = key; return item}),total:data.total}})
      }
    },
    *add({ payload }, { call, put }) {
      let data = yield call(service.addArticle, payload.values)
      if(data.code === 1){
        yield put({type:'query_article'})
      }
      return data
    },
    *update({ payload }, { call, put }) {
      let data = yield call(service.updateArticle, payload.values)
      if(data.code === 1){
        yield put({type:'query_article'})
      }
      return data
    },
    *delete({ payload }, { call, put }) {
      let data = yield call(service.deleteArticle, payload)
      if(data.code === 1){
        yield put({type:'query_article'})
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
