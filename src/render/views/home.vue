<template>
    <div style="width: 100%; height: 100%">
        <g-header></g-header>
        <div class="g-main">
            <g-nav></g-nav>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GHeader from '@/components/common/Header.vue';
import GNav from '@/components/common/Nav.vue';

export default defineComponent({
    components: { GHeader, GNav }
});
</script>

<style lang="less">
.swiper-slide {
    overflow-y: auto;
}
.g-main {
    display: flex;
    height: calc(100% - 110px);
    .m-main {
        position: relative;
        height: 100%;
        flex: 1;
        overflow: hidden;
        overflow-y: auto;
    }

    .el-drawer__wrapper {
        top: 50px;
        bottom: 60px;
        &.el-drawer__wrapper_playing {
            top: 0;
            .el-drawer {
                background: #f8f7f8;
            }
        }
        .el-drawer:focus {
            border: 0;
        }
        .el-drawer__body {
            height: 100%;
        }
    }
}
.toasted-container.top-center {
    top: 50% !important;
    transform: translate(-50%, -50%) !important;
    .toasted .primary,
    .toasted.toasted-primary {
        border-radius: 16px;

        padding: 30px;
        font-size: 20px;
    }
}
</style>
