<template>
  <div>
    <h2>
      Counter: {{ value }}
    </h2>
    <h2>
      Counter2: {{ value2 }}
    </h2>
  </div>
</template>

<script>
import eventEmitter from '../eventEmitter';

export default {
  name: 'Counter',
  props: {
    value: Number,
  },
  data: () => ({
    value2: 0,
  }),
  created() {
    eventEmitter.$on('changeCounter2', (payload) => {
      this.value2 += payload;
    });
  },
};
</script>

<style scoped>

</style>
