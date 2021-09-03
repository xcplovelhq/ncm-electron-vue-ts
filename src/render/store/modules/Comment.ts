import api from '@/api/index';

const state = {
    hotComments: [],
    comments: [],
    total: 0
};
const getters = {};
const mutations = {
    SET_COMMENT(state, data) {
        state.hotComments = data.hotComments;
        state.comments = data.comments;
    }
};
const actions = {
    async getCommentPlaylist({ commit }, payload) {
        const { data } = await api.commentData.getCommentPlaylist(payload);
        if (data.code === 200) {
            commit('SET_COMMENT', data);
            return data ? data : {};
        }
    }
    // getCommentPlaylist () {

    //   this.$api.commentData
    //       .getCommentPlaylist({
    //         id: this.$route.query.id,
    //         limit: this.params.limit,
    //         offset: offset - 1
    //       })
    //       .then(({ data }) => {
    //         this.total = data.total;
    //         hotC.list = data.hotComments || [];
    //         newC.list = data.comments || [];

    //         this.isLoading = false;
    //       });
    // }
};
export default {
    state,
    getters,
    mutations,
    actions
};
