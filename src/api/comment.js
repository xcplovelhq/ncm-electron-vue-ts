import axios from './axios';

// 获取专辑评论
const getCommentAlbum = async function (data) {
    const res = await axios.get({
        url: '/comment/album',
        data
    });
    return res;
};
// 获取音乐评论
const getCommentMusic = async function (data) {
    const res = await axios.get({
        url: '/comment/music',
        data
    });
    return res;
};
// 获取歌单评论
const getCommentPlaylist = async function (data) {
    const res = await axios.get({
        url: '/comment/playlist',
        data
    });
    return res;
};
// 发送评论
const setComment = async function (data) {
    const res = await axios.get({
        url: '/comment?timestamp=' + new Date().getTime(),
        data
    });
    return res;
};
// 获取动态评论
const getCommentEvent = async function (data) {
    const res = await axios.get({
        url: '/comment/event?timestamp=' + new Date().getTime(),
        data
    });
    return res;
};
// 给评论点赞
const setCommentLike = async function (data) {
    const res = await axios.get({
        url: '/comment/like?timestamp=' + new Date().getTime(),
        data
    });
    return res;
};
// 获取Mv评论
const getCommentMv = async function (data) {
    const res = await axios.get({
        url: '/comment/mv',
        data
    });
    return res;
};
// 获取视频评论
const getCommentVideo = async function (data) {
    const res = await axios.get({
        url: '/comment/video',
        data
    });
    return res;
};
export default {
    getCommentAlbum,
    getCommentMusic,
    getCommentPlaylist,
    setComment,
    getCommentEvent,
    setCommentLike,
    getCommentMv,
    getCommentVideo
};
