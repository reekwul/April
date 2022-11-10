<template>
    <div
        :class='{"item-wrapper":true,"item-wrapper_2n":flag}'>
        <div class="item-wrapper__item">
            <div class="command-text">
                <h3 class="command-text__name_color"
                >{{ item['name'] }}
                </h3>
                <h4 class="command-text__last-game"
                >{{ item['last_match_time'] | dataFilter }} назад
                </h4>
            </div>
            <div class="command-img">
                <img class="command-img__icon"
                     :src="item['logo_url']"
                     alt=""
                >
            </div>

        </div>
        <UIProgressbar class="item-wrapper__item"
                       :max-value="maxParams.rating"
                       :value="item['rating']"
        />
        <UIProgressbar class="item-wrapper__item"
                       :max-value="maxParams.wins"
                       :value="item['wins']"/>
        <UIProgressbar class="item-wrapper__item"
                       :max-value="maxParams.losses"
                       :value="item['losses']"/>
    </div>

</template>

<script lang="ts">
import Vue from 'vue'
import UIProgressbar from "@/components/UI/UIProgressbar";

export default Vue.extend({
    name: "CommandItem",
    components: {UIProgressbar},
    props: {
        flag: {
            type: Boolean,
            default() {
                return true
            }
        },
        item: {
            type: Object,
            default() {
                return {
                    team_id: Number,
                    rating: Number,
                    wins: Number,
                    losses: Number,
                    last_match_time: Number,
                    name: String,
                    tag: String
                }
            }
        },
        maxParams: {
            type: Object,
            default() {
                return {
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
                }
            },
        },
        index: {
            type: Number,
            default: () => (0)
        }
    },

    filters: {

        // dataFilter() функционал должен быть
        // зарегистрирован глобально

        dataFilter(value: number): string {
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
            return ''
        }
    },

})
</script>

<style scoped>
.item-wrapper {
    grid-template-columns:4.25fr 1.75fr 1.75fr 1.75fr;
}
</style>
