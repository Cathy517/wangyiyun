import { axiosRq } from '../../util/axios'
import { stat } from 'fs';
export default {
    state: {
        mvdetail: [], //mv详情
        mvcomment: [], //mv评论
        simimv: [], //相似mv
        peresonalizedmv: [] //推荐mv
    },
    mutations: {
        GETMVDETAIL(state, res) {
            state.mvdetail = res
        },
        GETMVCOMMENT(state, res) {
            state.mvcomment = res
        },
        GETSIMIMV(state, res) {
            state.simimv = res
        },
        GETPERSONALIZEDMV(state, res) {
            state.peresonalizedmv = res
        },
    },
    actions: {
        //mv详情
        async getMVDetailData({ commit }, { id }) {
            let params = {
                'mvid': id
            }
            let res = await axiosRq('GET', 'mv', params)
            commit('GETMVDETAIL', res);
            return res;
        },
        //mv评论
        async getMVCommentData({ commit }, { id, offset }) {
            let params = {
                id: id,
                offset: offset || 20
            }
            let res = await axiosRq('GET', 'comment/mv', params)
            commit('GETMVCOMMENT', res);
            return res;
        },
        //相似mv
        async getSimiMVData({ commit }, { id }) {
            let params = {
                'mvid': id
            }
            let res = await axiosRq('GET', 'simi/mv', params)
            commit('GETSIMIMV', res);
            return res;
        },
    }
}