import getBanner from '@/api/find';
import { ref } from 'vue';
import ResponseParams from 'typings/response';
export default function getBannerList() {
    const bannerList = ref([]);
    console.log(getBanner, 2222);

    // getBanner().then(({ data }) => {
    //     bannerList.value = data.banners;
    // });
    getBanner();
    return {
        bannerList
    };
}
