<template>
<div class="Table-Wrapper">
  <div class="Table-Header">
    <p class="column">Название команды</p>
    <p class="column">рейтинг</p>
    <p class="column">Победы</p>
    <p class="column">Проигрыши</p>
  </div>
  <div>
  <slot ></slot>
  </div>
  <div class="Table-Footer">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1846_285)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4C10.5523 4 11 4.44772 11 5V11C11 11.5523 10.5523 12 10 12C9.44771 12 9 11.5523 9 11V5C9 4.44772 9.44771 4 10 4Z" fill="white"/>
          <path d="M11 15C11 15.5523 10.5523 16 10 16C9.44771 16 9 15.5523 9 15C9 14.4477 9.44771 14 10 14C10.5523 14 11 14.4477 11 15Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_1846_285">
            <rect width="20" height="20" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    <p>
      Team Elo Rankings
    </p>
    <p>
      k=32, init=1000
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: "CommandTable",
}
</script>

<style scoped>
.Table-Header{
  grid-template-columns:4.25fr 1.75fr 1.75fr 1.75fr;
}
.Table-Footer{
  padding: 10px;

  display: flex;
  align-items: center;

  border-radius:0 0 10px 10px ;
  border-top: 1px solid #301070;
  border-left: 2px solid #301070;
  border-right: 2px solid #301070;
  border-bottom: 2px solid #301070;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  color: #FFFFFF;
}
.Table-Footer svg{
  margin: 5px 2.5px 5px 5px;
  padding: 5px 2.5px 5px 5px;
}
.Table-Footer p{
  margin: 5px 2.5px;
  padding: 5px 2.5px;
}
</style>
