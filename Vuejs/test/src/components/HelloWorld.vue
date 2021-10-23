<template>
  <form>
    <div>
      <label> Input A </label>
      <input type="text" v-model="num1" />
    </div>
    <div>
      <label> Input B </label>
      <input type="text" v-model="num2" />
    </div>
    <div>
      <label> InputSum</label>
      <input type="text" v-model="sum" />
    </div>
  </form>
  <button @click="sumNumber()">Click</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      num1: 0 ,
      num2: 0 ,
      sum: 0,
    };
  },
  mounted() {
    console.log("Num: ", this.num1);
  },
  methods: {
    sumNumber() {
      this.sum = Number(this.num1) + Number(this.num2);
      console.log("sum: ", this.sum);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  padding-top: 15px;
}
label {
  color: red;
}
button {
  margin-left: 55px;
  margin-top: 20px;
}
</style>
