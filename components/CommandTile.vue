<template>
    <div class="card">
        <div class="command">
            <div class="img-block">
                <img class="command-img"
                     :src="item['logo_url']"
                     alt=""
                >
            </div>
            <div class="command-block">
                <h3 class="command-name"
                >{{ item['name'] }}
                </h3>
                <h4 class="command-last"
                >{{ item['last_match_time'] | dataFilter }} назад
                </h4>
            </div>
        </div>
        <div class="progress">
            <div class="progress-item">
                <p>Рейтинг</p>
                <UIProgressbar
                    :max-value="maxParams.rating"
                    :value="item['rating']"
                />
            </div>
            <div class="progress-item">
                <p>Победы</p>
                <UIProgressbar
                    :max-value="maxParams.wins"
                    :value="item['wins']"/>
            </div>
            <div class="progress-item">
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
.card {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    box-sizing: border-box;
    max-width: 293px;
    min-height: 400px;
    margin: $margin;
    padding: $padding-24;
    border: 2px solid $CItem;
}

.command {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.command-block {
    margin: $margin;
    padding: $padding;
}

.command-img {
    max-height: 125px;
}

.progress {
    display: flex;
    flex: 1 1;
    flex-direction: column;
}

.progress-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.card:hover {
    background: $CItem-Wrapper-hover;
}

.img-block {
    height: 125px;
}
</style>
