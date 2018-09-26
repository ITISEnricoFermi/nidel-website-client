<template>
  <div class="counter">
    <div class="content">
      <p class="value">{{ value }}</p>
      <div class="tag">
        <span class="icon">
          <slot></slot>
        </span>
        <div class="crop">
          {{ crop }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'single',
  props: ['value', 'crop', 'icon']
}
</script>

<style scoped lang="scss">
.counter {
  border-radius: 0.3rem;
  width: 100%;
  height: 100%;
  position: relative;
  min-height: 25rem;

  .content {
    position: absolute;
    @include absCenter;
    text-align: center;

    .value {
      color: $color-white;
      font-size: 15rem;
      font-weight: lighter;
      margin-bottom: -2rem;
    }

    .tag {
      color: $color-white;
      text-transform: uppercase;
      font-size: 2rem;
    }

  }
}
</style>
