<template>
    <div class="command-text">
        <span class="command-text__name">
        {{ team.name }}
        </span>
        <div class="command-img">
            <img class="command-img__icon"
                 :src="team['logo_url']"
                 alt=""
            >
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "TeamUI",
    props: {
        team: {
            type: Object,
            default: () => ({})
        }
    }
})
</script>

<style scoped>

</style>
