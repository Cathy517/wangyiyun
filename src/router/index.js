import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/page/Recommend/Recommend'
import SongDetail from '@/page/SongDetail/SongDetail'
import PlayListDetail from '@/page/PlayListDetail/PlayListDetail'
import Leaderboards from '@/page/Leaderboards/Leaderboards'
import PlayList from '@/page/PlayList/PlayList'
import AnchorRadio from '@/page/AnchorRadio/AnchorRadio'
import Singer from '@/page/Singer/Singer'
import NewAlbum from '@/page/NewAlbum/NewAlbum'
import Artist from '@/page/Artist/Artist'
import AlbumDetail from '@/page/AlbumDetail/AlbumDetail'
import Search from '@/page/Search/Search'
import MVDetail from '@/page/MVDetail/MVDetail'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '',
            redirect: '/recommend'
        },
        {
            path: '/recommend',
            name: 'recommend',
            component: Recommend
        },
        {
            path: '/songDetail',
            name: 'songDetail',
            component: SongDetail
        },
        {
            path: '/playListDetail',
            name: 'playListDetail',
            component: PlayListDetail
        },
        {
            path: '/leaderboards',
            name: 'leaderboards',
            component: Leaderboards
        },
        {
            path: '/playList',
            name: 'playList',
            component: PlayList
        },
        {
            path: '/anchorRadio',
            name: 'anchorRadio',
            component: AnchorRadio
        }, {
            path: '/singer',
            name: 'singer',
            component: Singer
        }, {
            path: '/newAlbum',
            name: 'newAlbum',
            component: NewAlbum
        }, {
            path: '/artist',
            name: 'artist',
            component: Artist
        }, {
            path: '/albumDetail',
            name: 'albumDetail',
            component: AlbumDetail
        }, {
            path: '/search',
            name: 'search',
            component: Search
        }, {
            path: '/mvDetail',
            name: 'mvDetail',
            component: MVDetail
        }
    ]
})