import * as service from './service'
export default {

  namespace: 'orange',

  state: {
    imgList: [{url:"http://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/180412_aerping.jpg",title:"2018-04-12 在阿尔平坠落现场"},
      {url:"https://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/180430_ktv.jpg",title:"2018-04-30 在KTV倾情歌唱"},
      {url:"https://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/180630_wenyilu.jpg",title:"2018-06-30 文艺路上与父亲电话对谈"},
      {url:'https://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/180907_zhaoze.jpg',title:"2018-09-07 在沼泽现场和BBF席地而坐"},
      {url:"https://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/181010_qingchen.jpg",title:"2018-10-10 在秋日的早晨刷牙"},
      {url:"http://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/180412_aerping.jpg",title:"2018-04-12 在阿尔平坠落现场1"},
      {url:"https://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/180430_ktv.jpg",title:"2018-04-30 在KTV倾情歌唱2"},
      {url:"https://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/180630_wenyilu.jpg",title:"2018-06-30 文艺路上与父亲电话对谈3"},
      {url:'https://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/180907_zhaoze.jpg',title:"2018-09-07 在沼泽现场和BBF席地而坐4"},
      {url:"https://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/181010_qingchen.jpg",title:"2018-10-10 在秋日的早晨刷牙5"},
      {url:"http://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/180412_aerping.jpg",title:"2018-04-12 在阿尔平坠落现场6"},
      {url:"https://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/180430_ktv.jpg",title:"2018-04-30 在KTV倾情歌唱7"},
      {url:"https://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/180630_wenyilu.jpg",title:"2018-06-30 文艺路上与父亲电话对谈8"},
      {url:'https://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/180907_zhaoze.jpg',title:"2018-09-07 在沼泽现场和BBF席地而坐9"},
      {url:"https://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/181010_qingchen.jpg",title:"2018-10-10 在秋日的早晨刷牙10"},
      {url:"http://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/180412_aerping.jpg",title:"2018-04-12 在阿尔平坠落现场11"},
      {url:"https://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/180430_ktv.jpg",title:"2018-04-30 在KTV倾情歌唱12"},
      {url:"https://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/180630_wenyilu.jpg",title:"2018-06-30 文艺路上与父亲电话对谈13"},
      {url:'https://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/180907_zhaoze.jpg',title:"2018-09-07 在沼泽现场和BBF席地而坐14"},
      {url:"https://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/181010_qingchen.jpg",title:"2018-10-10 在秋日的早晨刷牙15"},
      {url:"http://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/180412_aerping.jpg",title:"2018-04-12 在阿尔平坠落现场16"},
      {url:"https://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/180430_ktv.jpg",title:"2018-04-30 在KTV倾情歌唱17"},
      {url:"https://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/180630_wenyilu.jpg",title:"2018-06-30 文艺路上与父亲电话对谈18"},
      {url:'https://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/180907_zhaoze.jpg',title:"2018-09-07 在沼泽现场和BBF席地而坐19"},
      {url:"https://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/181010_qingchen.jpg",title:"2018-10-10 在秋日的早晨刷牙20"},
      {url:"http://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/180412_aerping.jpg",title:"2018-04-12 在阿尔平坠落现场21"},
      {url:"https://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/180430_ktv.jpg",title:"2018-04-30 在KTV倾情歌唱22"},
      {url:"https://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/180630_wenyilu.jpg",title:"2018-06-30 文艺路上与父亲电话对谈23"},
      {url:'https://heyheybaby.oss-cn-beijing.aliyuncs.com/baby_img/180907_zhaoze.jpg',title:"2018-09-07 在沼泽现场和BBF席地而坐24"},
    ],
    records: [],
    swiperModel: true,
    modalVisible: false,
    showImageUrl: '',
    current: 0,
    pageSize: 15,
    total: 0,
    hasMore: true,
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({ type: 'save' });
    },
    *queryMore({ payload }, { call, put, select }) {
      const { pageSize, imgList } = yield select(_ => _.orange)
      /*let data = yield call(service.getRecord, {current:payload.current, pageSize})
      if(data.code === 1){
        yield put({type:'updateState',payload:{dataList:data.list, total:data.total current:payload.current}})
      }*/
      if(payload.current*pageSize - pageSize < 29){
        let data = imgList.slice(0, payload.current*pageSize)
        yield put({type:'updateState',payload:{records:data, total:29, current:payload.current}})  
      }else{
        yield put({type:'updateState',payload:{hasMore: false}})  
      }   
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
