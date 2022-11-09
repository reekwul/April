<template>
  <div>
    <div class="wrapper">
      <label class="value"
             :for="id"
      >{{value | valueFilter}}
      </label>
      <progress :class=colorProgress
        :id="id"
        :max="maxValue"
        :value="value"
      >{{value | valueFilter}}
      </progress>
    </div>
</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  name: "UIProgressbar",
  data:()=>({
    id:Date.now().toString()
  }),
  props:{
    maxValue:{
      type:Number,
      required: true,
    },
    value:{
      type:Number,
      required: true,
    }
  },
  computed:{
    colorProgress():string{
      const percentProgress = this.value/(this.maxValue/100)
      return  percentProgress > 90 ? 'bar Violet' :
        percentProgress > 60 ? 'bar Lime' :
          percentProgress > 30 ? 'bar Yellow' : 'bar Orange'

    }
  },
  filters:{
    valueFilter(value:number):number{
      return Math.floor(value)
    }
  }
})
</script>

<style scoped>
.wrapper{
  display: flex;
  flex-direction: column;

  color: #E0D8FF;

  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;

}
.value{
  margin: 0.156em 0;
  padding:  0.156em 0;

}
.bar{
  margin: 0.313em 0;
  flex:1;
  border:0;
  height: 4px;
  width: 128px;
  border-radius: 100vh;
  background: #C5C4C4;
}
.bar::-webkit-progress-bar {
  height: 4px;
  border-radius: 100vh;
  background: #100025;
}
.Violet::-webkit-progress-value {
  border-radius: 100vh;
  background: #7540F0;
}
.Lime::-webkit-progress-value {
  border-radius: 100vh;
  background: #BBDD00;
}
.Yellow::-webkit-progress-value {
  border-radius: 100vh;
  background: #EECD00;
}
.Orange::-webkit-progress-value {
  border-radius: 100vh;
  background: #FA7000;
}

</style>
