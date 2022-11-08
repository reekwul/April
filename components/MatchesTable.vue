<template>
  <div class="Table-Wrapper">
    <div class="Table-Header">
      <p class="column">id</p>
      <p class="column">Длительность</p>
      <p class="column">Radiant</p>
      <p class="column">Dire</p>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MatchesTable"
}
</script>

<style scoped>
.Table-Header{
  grid-template-columns: 2fr 2fr 3fr 3fr;
}
</style>
