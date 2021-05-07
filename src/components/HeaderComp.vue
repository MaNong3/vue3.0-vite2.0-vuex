<template>
  <div>
    <van-nav-bar
      :title="title"
      :left-text="leftText"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>
<script lang="ts">
export interface isVan {
  title: String;
  leftText: any;
  onClickLeft:String
}
export default {
  setup(props, cx) {
    // console.log(props, cx.attrs);
    const { title, leftText, onClickLeft } = cx.attrs;
    return {
      title,
      leftText,
      onClickLeft,
    };
  },
};
</script>