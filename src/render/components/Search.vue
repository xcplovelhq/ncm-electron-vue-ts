<template>
    <div class="g-search">
        <el-input
            ref="input"
            class="m-search-input"
            placeholder="搜索"
            :value="getSearchText"
            clearable
            size="small"
            @input="handleInput"
            @blur="handleBlur"
            @focus="handleFocus"
        >
            <!-- @keyup.enter.native="handleKeyupEnter" -->
            <!-- <i slot="prefix" class="el-input__icon el-icon-search"></i> -->
        </el-input>
    </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    setup() {
        const store = useStore();
        const getDrawerType = computed(() => store.state.drawerType);
        const isShowDrawer = computed(() => store.state.isShowDrawer);
        console.log(store.commit('CHANGE_DRAWER_STATUS'));
        const handleBlur = () => {
            store.commit('CHANGE_DRAWER_STATUS', false);
        };
        const handleFocus = () => {
            store.commit('SET_DRAWER_TYPE', 'search');
            store.commit('CHANGE_DRAWER_STATUS', true);
        };
        const handleInput = (row) => {
            store.commit('SET_SEARCH', row);
        };
        const handleKeyupEnter = () => {
            const arr = this.getSearchHistory || [];
            if (arr.indexOf(this.getSearchText) > 0) {
                arr.splice(arr.indexOf(this.getSearchText), 1);
            }
            arr.push(this.getSearchText);
            this.$store.commit('SET_SEARCH_HISTORY', arr);
            this.$store.commit('CHANGE_DRAWER_STATUS', false);
            this.$refs.input.blur();
            this.$router.push({
                name: 'search',
                query: { text: this.getSearchText }
            });
        };
        return {
            getDrawerType,
            isShowDrawer,
            handleBlur,
            handleFocus,
            handleInput,
            handleKeyupEnter
        };
    }
});
</script>

<style lang="less" scoped>
.g-search {
    position: relative;
    display: flex;
    align-items: center;
    width: 150px;
    height: 23px;
    padding: 0 4px 0 3px;
    border-radius: 50px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.1);
    .m-inp {
        position: absolute;
        left: 0;
        top: 0;
        width: 80%;
        height: 100%;
    }
}
</style>

<style lang="less">
.m-search-input {
    cursor: text;

    .el-input__inner {
        background: rgba(255, 255, 255, 0);
        border: 0;
        color: #fff;
        cursor: text;
    }

    .el-input__icon {
        transition: unset;
    }
    .el-input__clear,
    .el-input__prefix,
    .el-input__suffix {
        transition: unset;

        .main-text-color !important;
    }
    input::-webkit-input-placeholder {
        color: #fff;
        opacity: 0.5;
    }
}
</style>
