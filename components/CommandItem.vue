<template>
  <div
    :class='{"Item-Wrapper":true,"Item-Wrapper-2n":flag}'>
    <div class="item">
      <div>
        <h3 class="team"
        >{{ item['name'] }}
        </h3>
        <h4 class="last-match"
        >{{ item['last_match_time'] | dataFilter }} назад
        </h4>
      </div>
      <img class="icon"
           :src="item['logo_url']"
           alt=""
      >
    </div>
    <UIProgressbar class="item"
                   :max-value="rating"
                   :value="item['rating']"
    />
    <UIProgressbar class="item"
                   :max-value="wins"
                   :value="item['wins']"/>
    <UIProgressbar class="item"
                   :max-value="losses"
                   :value="item['losses']"/>
  </div>

</template>

<script>
import {defineComponent} from 'vue'
import UIProgressbar from "@/components/UI/UIProgressbar";

export default defineComponent( {
  name: "CommandItem",
  components: {UIProgressbar},
  data: () => ({
    flag: false
  }),
  mounted() {
    if ((this.index + 1) % 2 === 0) {
      this.flag = true
    }
  },
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    rating: {
      type: Number,
      default: () => (100)
    },
    wins: {
      type: Number,
      default: () => (100)
    },
    losses: {
      type: Number,
      default: () => (100)
    },
    index: {
      type: Number,
      default: () => (0)
    }
  },

  filters: {

    // dataFilter() функционал должен быть
    // вынесен в отдельный фаил

    dataFilter(value){
      const days = Math.floor(value / 1000 / 60 / 60 / 24)

      if (days.toString().match(/[056789]/g) !== null) {
        return days + ' дней'
      }
      if (days.toString().match(/[1]/g) !== null) {
        return days + ' день'
      }
      if (days.toString().match(/[234]/g) !== null) {
        return days + ' дня'
      }
      return days
    }
  },

})
</script>

<style scoped>
.Item-Wrapper {
  grid-template-columns:4.25fr 1.75fr 1.75fr 1.75fr;
}
.team{
  color: #BBDD00;
}
</style>
