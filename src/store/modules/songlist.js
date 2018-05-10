import { axiosRq } from '../../util/axios'
export default {
    state: {
        recommendsong: [], //热门推荐
        topalbum: [], //新碟上架
        MV: [], //MV
        songdetail: [], //歌曲详情
        lyric: [], //歌词详情
        commentmusic: [], //歌曲评论
        simisong: [], //相似歌曲
        playlistdetail: [], //歌单详情
        commentplay: [], //歌单评论
        simiplay: [], //相似歌单
        leaderboards: [], //排行榜
        playlisthighquality: [], //精品歌单
        albumdetail: [], //专辑详情
        albumcomment: [], //专辑评论
    },
    mutations: {
        GETRECOMMENDSONGS(state, res) {
            state.recommendsong = res
        },
        GETTOPALBUM(state, res) {
            state.topalbum = res
        },
        GETMV(state, res) {
            state.MV = res
        },
        GETSONGDETAIL(state, res) {
            state.songdetail = res
        },
        GETLYRIC(state, res) {
            state.lyric = res
        },
        GETCOMMENTMUSIC(state, res) {
            state.commentmusic = res
        },
        GETSIMISONG(state, res) {
            state.simisong = res
        },
        GETPLAYLISTDETAIL(state, res) {
            state.playlistdetail = res
        },
        GETCOMMENTPLAY(state, res) {
            state.commentplay = res
        },
        GETSIMIPLAY(state, res) {
            state.simiplay = res
        },
        GETLEADERBOARDS(state, res) {
            state.leaderboards = res
        },
        GETPLAYLISTHIGHQUALITY(state, res) {
            state.playlisthighquality = res
        },
        GETALBUMDETAIL(state, res) {
            state.albumdetail = res
        },
        GETALBUMCOMMENT(state, res) {
            state.albumcomment = res
        },
    },
    actions: {
        //推荐歌单
        async getRecommendData({ commit }, { limit }) {
            let res = await axiosRq('GET', 'personalized', {
                'limit': limit || 10
            })
            if (res) {
                commit('GETRECOMMENDSONGS', res)
            }
            return res;
        },
        //新碟上架
        async getTopAlbumData({ commit }, { offset, limit }) {
            let res = await axiosRq('GET', 'top/album', {
                'offset': offset || 0,
                'limit': limit || 30
            })
            if (res) {
                commit('GETTOPALBUM', res);
            }
            return res;
        },
        //推荐mv
        async getMVData({ commit }) {
            let res = await axiosRq('GET', 'personalized/mv')
            if (res) {
                commit('GETMV', res)
            }
            return res;
        },
        //歌曲详情
        async getSongDetailData({ commit }, { id }) {
            let res = await axiosRq('GET', 'song/detail', {
                'ids': id
            })
            if (res) {
                commit('GETSONGDETAIL', res);
            }
            return res
        },
        // 歌词详情
        async getLyricData({ commit }, { id }) {
            let res = await axiosRq('GET', 'lyric', {
                'id': id
            })
            if (res) {
                commit('GETLYRIC', res)
            }
            return res
        },
        //歌曲评论
        async getCommentMusicData({ commit }, { id, limit }) {
            let res = await axiosRq('GET', 'comment/music', {
                'id': id,
                'limit': limit || 20
            })
            if (res) {
                commit('GETCOMMENTMUSIC', res)
            }
            return res
        },
        //相似歌曲
        async getSimisongData({ commit }, { id }) {
            let res = await axiosRq('GET', 'simi/song', {
                id: id
            })
            if (res) {
                commit('GETSIMISONG', res)
            }
            return res
        },
        //歌单详情
        async getPlayListDetailData({ commit }, { id }) {
            let res = await axiosRq('GET', 'playlist/detail', {
                'id': id
            })
            if (res) {
                commit('GETPLAYLISTDETAIL', res);
            }
            return res
        },
        //歌单评论
        async getCommentPlayData({ commit }, { id, limit }) {
            let res = await axiosRq('GET', 'comment/playlist', {
                'id': id,
                'limit': limit || 20
            })
            if (res) {
                commit('GETCOMMENTPLAY', res)
            }
            return res
        },
        //相似歌单
        async getSimiplayData({ commit }, { id }) {
            let res = await axiosRq('GET', 'simi/playlist', {
                id: id
            })
            if (res) {
                commit('GETSIMIPLAY', res)
            }
            return res
        },
        //排行榜
        async getLeaderboardsData({ commit }, { idx }) {
            let res = await axiosRq('GET', 'top/list', {
                'idx': idx || 0
            })
            if (res) {
                commit('GETLEADERBOARDS', res)
            }
            return res
        },
        //精品歌单
        async getPlaylistHighquality({ commit }, { limit }) {
            let res = await axiosRq('GET', 'top/playlist/highquality', {
                limit: limit || 20
            })
            if (res) {
                commit('GETPLAYLISTHIGHQUALITY', res)
            }
            return res
        },
        //专辑内容
        async getAlbumDetailData({ commit }, { id }) {
            let res = await axiosRq('GET', 'album', {
                'id': id
            })
            if (res) {
                commit('GETALBUMDETAIL', res)
            }
            return res;
        },
        //专辑评论
        async getAlbumCommentData({ commit }, { id }) {
            let res = await axiosRq('GET', 'comment/album', {
                'id': id
            })
            if (res) {
                commit('GETALBUMCOMMENT', res)
            }
            return res;
        }
    }
}