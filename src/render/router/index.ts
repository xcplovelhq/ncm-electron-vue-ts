import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Find from '../views/find/index.vue';
import Home from '@/views/home.vue';
// import Fm from "../views/fm";
// import RankingList from "../views/find/ranking-list";
// import SongSheet from "@/views/song/";
// import SongSheetDetails from "@/views/song/song-sheet-details";
// import BoutiqueSong from "@/views/song/boutique-song";
// import MvDetails from "@/views/video/mv-details";
// import Singer from "@/views/singer";
// import RecommendMusic from "@/views/song/recommend-music";
// import Login from "@/views/login/";
// import NewMusic from "@/views/music/";
// import SingerDetails from "@/views/singer/details";
// import UserDetails from "@/views/user/user-details";
// import Video from "@/views/video";
// import Mv from "@/views/video/mv";
// import MvRankAll from "@/views/video/mv-rank-all";
// import MvAll from "@/views/video/mv-all";
// import Search from "@/views/search";
// import UserFollowFans from "@/views/user/user-follow-fans";
// import UserDynamic from "@/views/user/user-dynamic";
// import DynamicDetails from "@/views/user/dynamic-details";
// import MiniModel from "@/views/mini-model/";
// import FullScreen from "@/views/full-screen/";
// import ModelLyric from "@/views/model/lyric";
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Home,
        redirect: 'find',
        children: [
            {
                path: 'find',
                name: 'find',
                component: Find
            }
            // {
            //   path: "fm",
            //   name: "fm",
            //   component: Fm
            // },
            // {
            //   path: "ranking-list",
            //   name: "rankingList",
            //   component: RankingList
            // },
            // {
            //   path: "song-sheet",
            //   name: "songSheet",
            //   component: SongSheet
            // },
            // {
            //   path: "song-sheet-details",
            //   name: "songSheetDetails",
            //   component: SongSheetDetails
            // },
            // {
            //   path: "boutique-song",
            //   name: "boutiqueSong",
            //   component: BoutiqueSong
            // },
            // {
            //   path: "recommend-music",
            //   name: "recommendMusic",
            //   component: RecommendMusic
            // },
            // {
            //   path: "singer",
            //   name: "singer",
            //   component: Singer
            // },
            // {
            //   path: "singer-details",
            //   name: "singerDetails",
            //   component: SingerDetails
            // },
            // {
            //   path: "new-music",
            //   name: "newMusic",
            //   component: NewMusic
            // },
            // {
            //   path: "user-details",
            //   name: "userDetails",
            //   component: UserDetails
            // },
            // {
            //   path: "video",
            //   name: "video",
            //   component: Video
            // },
            // {
            //   path: "mv",
            //   name: "mv",
            //   component: Mv
            // },
            // {
            //   path: "mvRankAll",
            //   name: "mvRankAll",
            //   component: MvRankAll
            // },
            // {
            //   path: "mvAll",
            //   name: "mvAll",
            //   component: MvAll
            // },
            // {
            //   path: "search",
            //   name: "search",
            //   component: Search
            // },
            // {
            //   path: "userFollowFans",
            //   name: "userFollowFans",
            //   component: UserFollowFans
            // },
            // {
            //   path: "userDynamic",
            //   name: "userDynamic",
            //   component: UserDynamic
            // },
            // {
            //   path: "dynamicDetails",
            //   name: "dynamicDetails",
            //   component: DynamicDetails
            // }
        ]
    }
    // {
    //   path: "/login",
    //   name: "login",
    //   component: Login
    // },
    // {
    //   path: "/mvDetails",
    //   name: "mvDetails",
    //   component: MvDetails
    // },
    // {
    //   path: "/miniModel",
    //   name: "miniModel",
    //   component: MiniModel
    // },
    // {
    //   path: "/fullScreen",
    //   name: "fullScreen",
    //   component: FullScreen
    // },
    // {
    //   path: "/modelLyric",
    //   name: "modelLyric",
    //   component: ModelLyric
    // }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
