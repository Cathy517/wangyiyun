import { axiosRq } from "../../util/axios"
export default {
    state: {
        hotsingers: [], //热门歌手
        song: [], //歌手单曲
        album: [], //歌手专辑
        mv: [], //歌手mv
        singerdes: [], //歌手描述
        samesingers: [], //相似歌手
    },
    mutations: {
        GETHOTSINGERS(state, res) {
            state.hotsingers = res
        },
        GETSINGERSONG(state, res) {
            state.song = res
        },
        GETSINGERAlbum(state, res) {
            state.album = res
        },
        GETSINGERMV(state, res) {
            state.mv = res
        },
        GETSINGERDES(state, res) {
            state.singerdes = res
        },
        GETSAMESINGERS(state, res) {
            state.samesingers = res
        }
    },
    actions: {
        //热门歌手
        async getHotSingersData({ commit }, { offset, limit }) {
            let params = {
                'offset': offset || 0,
                'limit': limit || 50
            }
            let res = await axiosRq('GET', 'top/artists', params)
            if (res) {
                commit('GETHOTSINGERS', res)
            }
        },
        //歌手单曲
        async getSingerSongData({ commit }, { id }) {
            let res = await axiosRq('GET', 'artists', {
                id: id
            })
            if (res) {
                commit('GETSINGERSONG', res)
            }
            return res
        },
        //歌手专辑
        async getSingerAlbumData({ commit }, { id, limit }) {
            let params = {
                id: id,
                limit: limit || 50
            }
            let res = await axiosRq('GET', 'artist/album', params)
            if (res) {
                commit('GETSINGERAlbum', res)
            }
        },
        //歌手MV
        async getSingerMVData({ commit }, { id }) {
            let res = await axiosRq('GET', 'artist/mv', {
                id: id
            })
            if (res) {
                commit('GETSINGERMV', res)
            }
            return res
        },
        //歌手描述
        async getSingerDesData({ commit }, { id }) {
            let res = await axiosRq('GET', 'artist/desc', {
                id: id
            })
            if (res) {
                commit('GETSINGERDES', res)
            }
        },
        //相似歌手
        async getSameSingersData({ commit }, { id }) {
            let res = await axiosRq('GET', 'simi/artist', {
                id: id
            })
            console.log(res);
            if (res) {
                commit('GETSAMESINGERS', res)
            }
        }
    }
}