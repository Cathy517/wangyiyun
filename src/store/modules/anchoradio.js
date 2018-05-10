import { axiosRq } from "../../util/axios";
import { stat } from "fs";
export default {
    state: {
        catelist: [], //电台分类
        djrecommend: [], //电台推荐
        programrecommend: [], //推荐节目
        privatecontent: [], //独家放送
        djrecommendtype: [], //电台分类推荐
    },
    mutations: {
        GETCATELIST(state, res) {
            state.catelist = res
        },
        GETDJRECOMMEND(state, res) {
            state.djrecommend = res
        },
        GETPROGRAMRECOMMEND(state, res) {
            state.programrecommend = res
        },
        GETPRIVATECONTENT(state, res) {
            state.privatecontent = res
        },
        GETDJRECOMMENDTYPE(state, res) {
            state.djrecommendtype = res
        }
    },
    actions: {
        //电台分类
        async getCateListData({ commit }) {
            let res = await axiosRq('GET', 'dj/catelist');
            if (res) {
                commit('GETCATELIST', res)
            }
            return res
        },
        //电台推荐
        async getDjRecommendData({ commit }) {
            let res = await axiosRq('GET', 'dj/recommend');
            if (res) {
                commit('GETDJRECOMMEND', res)
            }
            return res
        },
        //推荐节目
        async getProgramRecommendData({ commit }) {
            let res = await axiosRq('GET', 'program/recommend')
            if (res) {
                commit('GETPROGRAMRECOMMEND', res);
            }
            return res
        },
        //独家放送
        async getPrivatecontentData({ commit }) {
            let res = await axiosRq('GET', 'personalized/privatecontent')
            if (res) {
                commit('GETPRIVATECONTENT', res);
            }
            return res
        },
        //电台分类
        /***
         * 1 明星做主播
         * 2 音乐故事
         * 3 情感调频
         * 4 娱乐/影视
         * 5 脱口秀
         * 6 美文读物
         * 7 广播剧
         * 8 相声曲艺
         * 11 人文历史 
         * 12 旅途|城市
         * 13 外语世界
         * 14 亲子宝贝
         */
        async getDJRecommendType({ commit }, { type }) {
            let res = await axiosRq('GET', 'dj/recommend/type', {
                'type': type
            })
            if (res) {
                commit('GETDJRECOMMENDTYPE', res);
            }
        },
    }
}