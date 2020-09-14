<template>
  <div>
  <p>  Hello I am: Index.vue
</p>
    <ButtonComponent   text="saludar" :click="bnSaludarClick" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ButtonComponent from "@/components/Button.vue";

export default Vue.extend({
  name: "Index",
  components: {
    ButtonComponent,
  },
  methods: {
    bnSaludarClick: function () {
      console.log("sdfdsffs",new Date());
    },
  },
});
</script>
