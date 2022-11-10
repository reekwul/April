<template>
    <div>
        <div class="progress-bar">
            <label class="progress-bar__value"
                   :for="id"
            >{{ value | valueFilter }}
            </label>
            <progress :class=colorProgress
                      :id="id"
                      :max="maxValue"
                      :value="value"
            >{{ value | valueFilter }}
            </progress>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

interface IData {
    id: string
}

export default Vue.extend({
    name: "UIProgressbar",
    data(): IData {
        return {
            id: Date.now().toString()
        }
    },
    props: {
        maxValue: {
            type: Number,
            required: true,
        },
        value: {
            type: Number,
            required: true,
        }
    },
    computed: {
        colorProgress(): string {
            const percentProgress = this.value / (this.maxValue / 100)
            return percentProgress > 90 ? 'bar bar_violet' :
                percentProgress > 60 ? 'bar bar_lime' :
                    percentProgress > 30 ? 'bar bar_yellow' : 'bar bar_orange'

        }
    },
    filters: {
        valueFilter(value: number): number {
            return Math.floor(value)
        }
    }
})
</script>

<style scoped lang="scss">


</style>
