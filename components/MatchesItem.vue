<template>
    <div :class='{
        "Item-Wrapper":true,
         "Item-Wrapper-2n":flags.flag2N,
          "lastItem":flags.lastItem}'
    >
        <div class="item ">
            {{ matchId }}
        </div>
        <div class="item ">
            {{ duration | durationRef }}
        </div>

        <TeamUI v-for="team in teams"
                :key="Date.now().toString()"
                :team="team"
        />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import TeamUI from "~/components/UI/TeamUI.vue";

interface IData {
    flag: boolean
}

export default Vue.extend({
    name: "MatchesItem",
    components: {TeamUI},
    props: {
        flags: {
            type: Object,
            default(){
                return{
                    flag2N:{
                        type:Boolean,
                        default(){
                            return true
                        }
                    },
                    lastItem:{
                        type:Boolean,
                        default(){
                            return false
                        }
                    },
                }
            }
        },
        index: {
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
        teams: {
            type: Array,
            default: () => ([])
        },
    },
    filters: {
        durationRef(value: number): string {
            const sec = (value % 60).toString().padStart(2, '0')
            return Math.floor(value / 60) + ':' + sec
        }
    },
})
</script>

<style scoped>
.Item-Wrapper {
    grid-template-columns: 2fr 2fr 3fr 3fr;
}

.lastItem {
    border-radius: 0 0 10px 10px;
}
</style>
