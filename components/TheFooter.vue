<template>
    <div class="footer">
        <p class="footer-text">
            2022© OpenDota
        </p>
        <div class="footer-right">
            <p class="footer-text">О нас</p>
            <p class="footer-text">Политика конфидициальности</p>
            <p class="footer-text">Документация API</p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: "TheFooter"
})
</script>

<style scoped>
.footer {

    display: flex;
    justify-content: space-between;
    background: rgba(16, 0, 37, 0.25);

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;


}

.footer-right {
    display: flex;
    justify-content: space-between;
}

.footer-text {
    margin: 12px;
    padding: 12px;

    color: #E0D8FF;
    font-size: 19px;
}
</style>
