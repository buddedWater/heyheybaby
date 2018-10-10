import img1 from '../../assets/firstImage/img1.jpg';
import img2 from '../../assets/firstImage/img2.jpg';
import img3 from '../../assets/firstImage/img3.jpg';
import img4 from '../../assets/firstImage/img4.jpg';
import img5 from '../../assets/firstImage/img5.jpg';
import img6 from '../../assets/firstImage/img6.jpg';
import img7 from '../../assets/firstImage/img7.jpg';
import img8 from '../../assets/firstImage/img8.jpg';
import img9 from '../../assets/firstImage/img9.jpg';

export default {

  namespace: 'first',

  state: {
  	cardList:[{url:img1,name:"img1"},{url:img2,name:"img2"},{url:img3,name:"img3"},
	  	{url:img4,name:"img4"},{url:img5,name:"img5",to:"second"},{url:img6,name:"img6"},{url:img7,name:"img7"},
	  	{url:img8,name:"img8"},{url:img9,name:"img9"}],
	  text: ["這時代大家都必須接受專訪 自己說明自己 是怎麼樣變成現在這個樣子的 而且還要變本加厲下去 事先不被透露問題 爲了不惜一切代價接近真實 濕透的衣服緊貼在濕透的身上 再貼上濕透的一張臉 使人無法記住 無法描述 無法證明 那是濃縮過還是稀釋過 億萬臉孔中的一張 裏面有一個表情 總是讓出現這件事情 就是顯得不夠流暢 配上幾句電影裏的對白 就夠一輩子支支吾吾了：「我不想尋找自我 我只想做個謎樣的人 有時候承擔狂野的痛楚」 提議交換日記 和濕透的衣服 和濕透的身體 和濕透的臉 拖延離去的時間 約下次見面 在離下次之前 仍然有很大的漏洞 足夠不厭其煩地醒來"],
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
