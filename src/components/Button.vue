<template>
  <button @click="click"    >{{ text }}</button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name:'Button',
  props: ["disable", "click", "text"],
});
</script>