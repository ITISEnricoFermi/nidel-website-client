<template>
<main class="main"></main>
</template>

<script>
export default {
  name: 'camera',
  sockets: {
    camera (frame) {
      console.log(frame)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
