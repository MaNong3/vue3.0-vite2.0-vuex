<template>
  <router-view  v-wechat-title='$route.meta.title'  />
  <Tabbar v-show="showTab"></Tabbar>
</template>
<script>
import {useRoute} from "vue-router"
import {watch} from "vue"
import Tabbar from "/@/components/Tabbar.vue"
export default {
  setup(){
    const route=useRoute()
    const showTab=route.meta.showTab;
    watch(route.name,()=>{
      console.log(route,"route.meta")
    })
    return {
      showTab
    }
  },
  components:{
    Tabbar
  }
}
</script>