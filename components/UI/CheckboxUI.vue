<template>
    <input class="check" type="checkbox" v-model="flag" @change="()=>this.$emit('change',this.flag)">
</template>

<script lang="ts">
import Vue from "vue";

interface IData {
    flag: boolean
}

export default Vue.extend({
    name: "CheckboxUI",
    data(): IData {
        return {
            flag: false
        }
    }
})
</script>

<style scoped>
.check {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    margin: 7px;
    padding: 20px;
    background: url("/apps_FILL0_wght400_GRAD0_opsz48.svg") center no-repeat;
    transition: 0.3s;
}

.check:checked {
    background: url("/menu_FILL0_wght400_GRAD0_opsz48.svg") center no-repeat;
}

.check:checked:before {
    background: url("/apps_FILL0_wght400_GRAD0_opsz48.svg") center no-repeat;
}
</style>
