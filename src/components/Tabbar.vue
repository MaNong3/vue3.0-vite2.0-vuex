<template name="component-name">
  <div>
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const active = ref(0);
    return { active };
  },
};
</script>
