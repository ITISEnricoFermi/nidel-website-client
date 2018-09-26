<template>
<div class="main">
  <header class="header">
    <a href="/" class="logo">
        <img src="/layout/logo.jpeg">
    </a>
    <a href="https://sciencewatching.com" class="button button--red">Torna al sito</a>
  </header>
  <app-live></app-live>
</div>
</template>

<script>
import Live from '@/components/live/live'

export default {
  components: {
    appLive: Live
  }
}
</script>

<style lang="scss">
.main {
  width: 100%;
  height: auto!important;
  min-height: 100vh;

  .header {
      width: 100vw;
      height: 8rem;
      background-color: $color-primary;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 3vh;

      .logo {
        display: block;

          img {
              height: 6rem;
              clip-path: circle(45%);
          }

      }

      .button {
        display: block;
        float: right;
      }

  }

  .live {
    height: calc(100% - 8rem);
  }

}

.smoothie-chart-tooltip {
    background: #444;
    padding: 1em;
    margin-top: 20px;
    font-family: 'Roboto';
    color: white;
    font-size: 10px;
    pointer-events: none;
}
</style>
