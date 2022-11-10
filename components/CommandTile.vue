<template>
    <div class="tile-table__card">
        <div class="command">
            <div class="command-img">
                <img class="command-img__img"
                     :src="item['logo_url']"
                     alt=""
                >
            </div>
            <div class="command-text">
                <h3 class="command-text__name"
                >{{ item['name'] }}
                </h3>
                <h4 class="command-text__last-game"
                >{{ item['last_match_time'] | dataFilter }} назад
                </h4>
            </div>
        </div>
        <div class="progress">
            <div class="progress__item">
                <p>Рейтинг</p>
                <UIProgressbar
                    :max-value="maxParams.rating"
                    :value="item['rating']"
                />
            </div>
            <div class="progress__item">
                <p>Победы</p>
                <UIProgressbar
                    :max-value="maxParams.wins"
                    :value="item['wins']"/>
            </div>
            <div class="progress__item">
                <p>Поражени</p>
                <UIProgressbar
                    :max-value="maxParams.losses"
                    :value="item['losses']"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import UIProgressbar from "~/components/UI/UIProgressbar.vue";

export default Vue.extend({
    name: "CommandTile",
    components: {UIProgressbar},
    props: {
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

<style scoped lang="scss">
.command {
    display: flex;
    flex-direction: column;
    align-items: center;
}



.progress {
    display: flex;
    flex: 1 1;
    flex-direction: column;

    &__item{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}

</style>
