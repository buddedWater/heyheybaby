import * as service from './service'
export default {

  namespace: 'second',

  state: {
    dataList: [],
    paused: false,
    show: true,
    activeRow: {},
    current: 1,
    pageSize: 10,
    total: 10,
    detailDistance: 1500,
    basicDistance: 0
  },

  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname, search }) => {
        if(pathname === '/second'){
          dispatch({type:'query', payload:{current:1}})
        }
      });
    },
  },

  effects: {
    *query({ payload }, { call, put, select }) {
      const { pageSize } = yield select(_ => _.second)
      let data = yield call(service.getArticle, {current:payload.current, pageSize})
      if(data.code === 1){
        yield put({type:'updateState',payload:{dataList:data.list,total:data.total,current:payload.current}})
      }
    },

    *query_detail({ payload }, { call, put, select }) {
      const { dataList } = yield select(_ => _.second)
      let activeRow = dataList.find((item, key)=>{return item.Key === payload.activeKey})
      if(activeRow){
        yield put({type:'updateState',payload:{activeRow}})
      }
    },
  },

  reducers: {
    updateState(state,  { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
