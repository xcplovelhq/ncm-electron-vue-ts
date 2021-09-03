<template>
    <div class="g-find">
        <div class="g-warper" ref="warper">
            <div class="g-banner">
                <el-carousel :interval="40000" type="card" height="200px" @change="getBannerIdx" trigger="click">
                    <el-carousel-item v-for="(item, idx) in bannerList" :key="item.key">
                        <el-image
                            class="m-banner-img"
                            :src="item.imageUrl + '?imageView&quality=80'"
                            fit="fill"
                            @click="handleClick(item, idx)"
                        ></el-image>
                        <div class="m-tips">{{ item.typeTitle }}</div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
/**
 * @name 页面名称
 * 页面接收参数
 * 必传
 * @param paramName     参数名称 1-阿闻到家；2-商城；
 *
 * 非必选
 * @param paramName     参数名称 1-阿闻到家；2-商城；
 * 返回
 * @returns emit        组件暴露出去的方法
 */
import { defineComponent, ref, reactive } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
    setup() {
        const visible = ref(false);
        const bannerList = reactive([]);
        const songSheetList = reactive([]);
        const newSongList = reactive([]);
        const videoList = reactive([]);
        const djList = reactive([]);
        const columnList = reactive([
            {
                id: 1,
                title: '推荐歌单',
                type: 'song',
                to: { name: 'songSheet' }
            },
            {
                id: 2,
                title: '最新音乐',
                type: 'music',
                to: { name: 'newMusic' }
            },
            {
                id: 3,
                title: '推荐MV',
                type: 'mv',
                to: { name: 'mv' }
            }
        ]);
        function getBanner() {
            this.$api.findData.getBanner().then(({ data }) => {
                this.bannerList = data.banners;
            });
        },

        return {};
    }
});
</script>

<style lang="less" scoped>
.g-find {
    width: 100%;
    padding: 20px 30px;
    .g-banner {
        width: 100%;
        .is-active {
            width: 80%;
        }
        .m-banner-img {
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: 8px;
        }
        .m-tips {
            position: absolute;
            right: 0;
            bottom: 0;
            padding: 2px 10px;
            font-size: 12px;
            color: #fff;
            border-radius: 8px 0 8px 0;
            background: #d54b4b;
        }
    }
    .m-change {
        margin-top: 80px;
        text-align: center;
        font-size: 12px;
        color: #aeaeae;
        .m-btn {
            width: 122px;
            height: 30px;
            line-height: 28px;
            margin: 10px auto 0;
            border-radius: 15px;
            font-size: 12px;
            color: @main-color;
            border: 1px solid @main-color;
            cursor: pointer;
            &:hover {
                background: @main-color;
                color: #fff;
            }
        }
    }
    .m-reset {
        text-align: center;
        margin-top: 20px;
        text-decoration: underline;
        cursor: pointer;
    }
    .m-title {
        margin-bottom: 20px;
        text-align: center;
        font-size: 14px;
        color: #cacaca;
    }
    .m-column-item {
        padding: 0px 20px;
        cursor: move;
        div {
            padding: 10px 0;
            border-bottom: 1px solid #f3f3f3;
        }
        &:hover {
            background: #f5f5f5;
        }
    }
}
</style>
