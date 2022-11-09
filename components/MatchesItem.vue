<template>
  <div :class='{"Item-Wrapper":true, "Item-Wrapper-2n":flag, lastItem:lastItem}'>
    <div class="item "
    >{{ matchId }}
    </div>
    <div class="item "
    >{{ duration | durationRef }}
    </div>
    <div class="item ">
    <span class="team"
    >{{ radiantTeam.name }}
    </span>
      <img class="icon"
           :src="radiantTeam['logo_url']"
           alt=""
      >
    </div>
    <div class="item ">
    <span class="team"
    >{{ direTeam.name }}
    </span>
      <img class="icon"
           :src="direTeam['logo_url']"
           alt=""
      >
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "MatchesItem",
  data: () => ({
    flag: false
  }),
  mounted() {
    if ((this.index + 1) % 2 === 0) {
      this.flag = true
    }
  },
  props: {
    index: {
      type: Number,
      default: () => (0)
    },
    maxItem: {
      type: Number,

      default: () => (0)
    },
    matchId: {
      type: Number,
      default: () => (0)
    },
    duration: {
      type: Number,
      default: () => (0)
    },
    radiantTeam: {
      type: Object,
      default: () => ({})
    },
    direTeam: {
      type: Object,
      default: () => ({})
    }
  },
  filters: {
    durationRef(value:number):string{
      const sec = (value % 60).toString().padStart(2, '0')
      return Math.floor(value / 60) + ':' + sec
    }
  },
  computed: {
    lastItem():boolean {
      return this.index === this.maxItem
    }
  }
})
</script>

<style scoped>
.Item-Wrapper{
  grid-template-columns: 2fr 2fr 3fr 3fr;
}
.lastItem {
  border-radius: 0 0 10px 10px;
}
</style>
