import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {
      name: "",
      nickname: "",
      voter: "",
      reason: "",
    },
    subData: {
      name: "",
      nickname: "",
      voter: "",
      reason: "",
    },
  },
  getters: {},
  mutations: {
    updateData(state, data) {
      state.data.name = data.name;
      state.data.nickname = data.nickname;
      state.data.voter = data.voter;
      state.data.reason = data.reason;
    },
  },
  actions: { // データを扱う処理を諸々まとめる
    updateMainData({ commit }, mainData) {
      commit("updateData", mainData); // mutationsにデータを移行する処理(vuex側で保存する用)
      axios // DBにデータ送る処理
        .post("posts", {
          fields: {
            name: {
              stringValue: mainDana.name,
            },
            nickname: {
              stringValue: mainDana.nickname,
            },
            voter: {
              stringValue: mainDana.voter,
            },
            reason: {
              stringValue: mainDana.reason,
            },
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      router.push("/thanks");
    },
    updateSubData({ commit }, subData) {
      commit('updateData', subData);
      axios
        .post("postsSub", {
          fields: {
            name: {
              stringValue: subData.name,
            },
            nickname: {
              stringValue: subData.nickname,
            },
            voter: {
              stringValue: subData.voter,
            },
            reason: {
              stringValue: subData.reason,
            },
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      router.push("/thanks");
    },
  },
});