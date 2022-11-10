<template>
    <button class="Btn"
            @click="()=>this.$emit('click')"
    >
        <slot></slot>
    </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "UIBtn",
})
</script>

<style scoped>
.Btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 20px;
    background: #FFFFFF;
    border-radius: 4px;
    border: 2px solid white;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
}
</style>
