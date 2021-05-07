<template>
  <div class="warp">
    <Header :title="title" :leftText="leftText" :onClickLeft="onClickLeft" />
    <section>
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </section>
    <div>{{ id }}</div>
    <div>
      {{commitFn()}}
    </div>
    <div class="buttons">
      <p>
        <button type="primary" @click="idAdd">id++</button>
      </p>
      <p>
        <button @click="idReduce">id--</button>
      </p>
    </div>
  </div>
</template>
<script>
import Footer from "/@/components/Tabbar.vue";
import Header from "/@/components/HeaderComp.vue";
import { useStore } from "vuex";
import { reactive, computed } from "vue";
export default {
  name: "Home",
  setup() {
    const store = useStore();
    const id = computed(() => store.state.id);
    const images = [
      "https://img.yzcdn.cn/vant/apple-1.jpg",
      "https://img.yzcdn.cn/vant/apple-2.jpg",
    ];
    const data = reactive({
      title: "首页",
      leftText: "返回",
    });
    const onClickLeft = () => {
      console.log(1111);
    };
    return {
      images,
      ...data,
      onClickLeft,
      id,
      idAdd: () => store.commit("idAdd"),
      idReduce: () => store.commit("idReduce"),
    };
  },
  components: {
    Footer,
    Header,
  },
};
</script>
<style>
img {
  width: 100%;
  height: auto;
}
</style>