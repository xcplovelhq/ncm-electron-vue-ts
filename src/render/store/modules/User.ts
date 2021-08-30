import api from '@/api/index';

export interface State {
    isShowDrawer: boolean;
    isShowPlayingDrawer: boolean;
    drawerType: string;
    mvArea: Array<string>;
}
const state: State = {
    isShowDrawer: false,
    isShowPlayingDrawer: false,
    drawerType: 'playList',
    mvArea: ['内地', '港台', '欧美', '日本', '韩国']
};
const mutations = {
    CHANGE_DRAWER_STATUS(state, data: boolean) {
        state.isShowDrawer = data;
    },
    CHANGE_PLAYING_DRAWER_STATUS(state, data) {
        state.isShowPlayingDrawer = data;
    },
    SET_DRAWER_TYPE(state, data) {
        state.drawerType = data;
    }
};
export default {
    state,
    mutations
};
