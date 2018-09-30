
export default {

  namespace: 'second',

  state: {
  	allDataList: [
      {key:'1', title:'隱匿的王后和她不可見的城市', date:'2018-07-15', content:'在她的國度，一張 牽強附會的地圖。 出走的銅像不被履行的 遺書和諾言識破的陷阱 混淆的線索和消滅中的指紋以及 所有遺失的眼鏡和傘等 組成的國度。 她暗中畫著虛線，無限 擴大的版圖。 一座分類詳盡的失物博物館，好極了。 另外呢，就是那些命运以及 歷史都還未曾顯現跡象的時刻吧  她草擬了秋天的徒步計劃（目的不明 但將在每一個十字路口右轉）寫好一個輕歌劇 餵了貓 寫了信 打一個蝴蝶結 在永不悔悟的心'},
      {key:'2', title:'小孩　㈠', date:'2018-05-12', content:'他們都不說話 在旋轉救火車上 充滿遠方的心事 我突然願意　此刻 他們都死去 不要長大 長成一模一樣的郵票 於是在模糊的夜裏 有人就將他們用力撕開 就有著毛毛的邊 就全呈鋸齒狀的'},
      {key:'3', title:'在陣雨之間', date:'2018-04-20', content:'我正孤獨通過自己行星上的曠野我正  孤獨通過自己行星上的曠野我正孤獨 通過自己行星上的曠野我正孤獨通過 自己行星上的曠野我正孤獨通過自己 行星上的曠野我正孤獨通過自己行星 上的曠野  曠野 正孤獨 我正孤獨通過'},
      {key:'4', title:'與動物密談　㈢', date:'2018-03-02', content:'關於反面。一座可以容納數?#124;人的大劇院裏 階梯成幾何級數往不可知的黑暗排列 階梯上一個接著一個橫生的座位每個位子 都坐滿了看電影的人一面巨大的布幕 懸挂在劇場中央放映的片名 叫做「事物的狀態」布幕的另一面 也如同這一面有著無以計數的階梯 無以計數的作爲無以計數的人坐著 在看同一部反面的電影'},
      {key:'5', title:'野獸派', date:'2018-02-26', content:'20歲的乳房像兩隻動物在長久的睡眠 之後醒來　露出粉色的鼻頭  試探著　打呵欠　找?#124;西吃　仍舊  要繼續長大　繼續 長大　長 大'},
      {key:'6', title:'雨天女士藍調', date:'2018-01-05', content:'於是 如同你知道的 我只是一個穿過的人 客人陸續進來 在彼此的耳朵上打洞 留下堅定的記號。一切變得深不可測 如此刻意地迴避主題 他們如此刻意地繼續舞蹈下去 直至潰爛。但是我的墨水瓶以及我的課本呢 閲讀。無止盡的閲讀。整個季節冗長的雨。……「並非夢或陰影，而且顯露 在一刹那間充滿生命的不可預知的?#124;西。」 雨。「有力的侵入任何經驗之片段。」'}, 
      {key:'7', title:'遁辭', date:'2018-01-01', content:'地下鐵裏木頭長條椅子被幾千幾百萬 個屁股摩擦得光滑發亮一個剛下車的女 人坐在這裏寫日記佔據了１／５的座位 她想我沒有辦法克制自己不屈描寫任何 的「當下的情況」譬如描寫現在坐著的 地下鐵裏木頭長條椅子被幾千幾百萬 個屁股摩擦得光滑發亮一個剛下車的女 人坐在這裏寫日記佔據了１／５的座位 她想'},
      {key:'8', title:'耳鳴', date:'2017-12-25', content:'我們稱之為夏天的 這些椅子其實 是不同的島我們 停下來找東西 解開懸掛 交換倒數 骰子就變成線索 瓶子就變成船螺 鞋子就開始是一個郵輪 我就駛過你的港 你坐在箱子上寫字 耳朵的手風琴地窖裹有神秘共鳴 頭髮已經慢慢留長了 鐘用海擦得很乾淨 我們都會打勾 在這樣的下午 這是譬如的第6次方 你喊我的名字 遺失三顆紐扣'},
      {key:'9', title:'音樂', date:'2017-12-23', content:'推窗望見深夜的小城 只有雨讓城市傾斜 只有風是橢圓的城樓 只有星那階梯只有 走過那少年微醺 那酒場昏黃 那一天 那幽靈就蹲在傘緣 那年少 橫生枝節 那音樂滲出地心 迴避過極低的台階和樓 往河邊的方向走 而還沒有完成的 簡單的清晨 光滑發亮 深不可測 那死 在那剎那 被當作開頭'},
      {key:'10', title:'在港口最後一次零星出現', date:'2017-12-15', content:'一點一點消失著的旅行的我 絕望地收集著城堡的入場券 在港口最後一次零星出現 儘量表現出 甜蜜但是冷淡的樣子 拿出深藏的小刀險險舔過 滲出血，痛並快樂著。 漸漸深入體内絕頂的懸崖 突然想及的 某首歌的片段—— 但又活過來了，繼續收集 所有門口的入場券。是 他曾經是我最愛 最鋒利的小刀'},
    ],
    dataList: [],
    paused: false,
    show: true,
    activeRow: {},
    current: 1,
    pageSize: 7,
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
      const { pageSize, allDataList } = yield select(_ => _.second)
      let newDataList = allDataList.slice(pageSize*(payload.current-1), pageSize*(payload.current-1) + pageSize)
      yield put({type:'updateState',payload:{dataList:newDataList, current:payload.current}})
    },

    *query_detail({ payload }, { call, put, select }) {
      const { dataList } = yield select(_ => _.second)
      let activeRow = dataList.find((item, key)=>{return item.Key === payload.activeKey})
      if(activeRow){
        yield put({type:'updateState',payload:{activeRow}})
      }
    },

    *fetch({ payload }, { call, put }) {
      yield put({ type: 'save' });
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
