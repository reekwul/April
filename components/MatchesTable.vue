<template>
    <div class="table-wrapper">
        <div class="table-header">
            <p class="table-header__column">id</p>
            <p class="table-header__column">Длительность</p>
            <p class="table-header__column">Radiant</p>
            <p class="table-header__column">Dire</p>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: "MatchesTable"
})
</script>

<style scoped lang="scss">
.table-header {
    grid-template-columns: 2fr 2fr 3fr 3fr;
}
</style>
