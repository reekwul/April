<template>
    <input class="inp" :value="modelValue" @input="modelValue = $event.target.value">
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    name: "InputUI",
    props: {
        modelValue: {
            type: String,
            default: () => ('')
        },
    },
})
</script>

<style scoped>
.inp {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 0.75rem;
    background: rgba(224, 216, 255, 0.4);
    border-radius: 4px 0 0 4px;
    border: 2px solid #E0D8FF;
    color: #000000;
    outline: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
}

.inp::placeholder {
    color: rgba(224, 216, 255, 0.4);
}

.inp:focus {
    outline: none;
}
</style>
