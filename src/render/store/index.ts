import { createStore } from 'vuex';
// import User from './modules/User';
// import Play from './modules/Play';
// import Video from './modules/Video';
// import Comment from './modules/Comment';
import createMutationsSharer from 'vuex-shared-mutations';
export interface State {
    isShowDrawer: boolean;
    isShowPlayingDrawer: boolean;
    drawerType: string;
    mvArea: Array<string>;
}
export default createStore<State>({
    state: {
        isShowDrawer: false,
        isShowPlayingDrawer: false,
        drawerType: 'playList',
        mvArea: ['内地', '港台', '欧美', '日本', '韩国']
    },
    mutations: {
        CHANGE_DRAWER_STATUS(state, data: boolean) {
            state.isShowDrawer = data;
        },
        CHANGE_PLAYING_DRAWER_STATUS(state, data) {
            state.isShowPlayingDrawer = data;
        },
        SET_DRAWER_TYPE(state, data) {
            state.drawerType = data;
        }
    },
    actions: {},
    modules: {
        // User,
        // Play,
        // Video,
        // Comment
    },
    plugins: [
        createMutationsSharer({
            predicate: [
                'SET_PLAY_INFO',
                'SET_VOLUME',
                'SET_PLAY_LIST',
                'SET_ISPLAY',
                'SET_LYRIC',
                'SET_CURRENT_TIME',
                'SET_ISSHOWLYRIC'
            ]
        })
    ]
});
