<template>
    <div class="search-box">
        <InputUI placeholder="Поиск" v-model="textInp"/>
        <button class="Btn" @click="()=>this.$emit('searching',textInp)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M13.5 16C16.5376 16 19 13.5376 19 10.5C19 7.46243 16.5376 5 13.5 5C10.4624 5 8 7.46243 8 10.5C8 13.5376 10.4624 16 13.5 16ZM13.5 18C17.6421 18 21 14.6421 21 10.5C21 6.35786 17.6421 3 13.5 3C9.35786 3 6 6.35786 6 10.5C6 12.2105 6.57264 13.7873 7.53666 15.0491C7.94304 15.581 8.41897 16.057 8.95088 16.4633C10.2127 17.4274 11.7895 18 13.5 18Z"
                      fill="black"/>
                <path
                    d="M4.70711 20.7071L8.95088 16.4633C8.41897 16.057 7.94304 15.581 7.53666 15.0491L3.29289 19.2929C2.90237 19.6834 2.90237 20.3166 3.29289 20.7071C3.68342 21.0976 4.31658 21.0976 4.70711 20.7071Z"
                    fill="black"/>
            </svg>
            Поиск
        </button>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import InputUI from "~/components/UI/InputUI.vue";

interface IData {
    textInp: string
}

export default Vue.extend({
    name: "SearchUI",
    components: {InputUI},
    data(): IData {
        return {
            textInp: '',
        }
    }
})
</script>

<style scoped lang="scss">

.Btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 0.75rem;
    background: #E0D8FF;
    border-radius: 0 4px 4px 0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 19px;
    border: 2px solid #E0D8FF;

    color: #000000;
}

</style>
