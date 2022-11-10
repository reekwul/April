<template>
    <div class="item ">
    <span class="team">
      {{ team.name }}
    </span>
        <img class="icon"
             :src="team['logo_url']"
             alt=""
        >
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
