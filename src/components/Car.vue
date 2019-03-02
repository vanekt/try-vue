<template>
  <div class="car">
    <h1>{{name}} / {{ reverseName }}</h1>
    <p>{{year}}</p>
    <button @click="changeCounter">Change counter</button>
    <button @click="changeCounter2">Change counter2</button>

    <slot name="country"></slot>
  </div>
</template>

<script>
import eventEmitter from '../eventEmitter';

export default {
  name: 'Car',
  // props: ['name', 'year'],
  props: {
    name: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      default: 2019,
    },
    changeCounter: Function,
  },
  computed: {
    reverseName() {
      return this.name.split('').reverse().join('');
    },
  },
  methods: {
    changeCounter2() {
      eventEmitter.$emit('changeCounter2', 5);
    },
  },
};
</script>

<style scoped>
  .car {
    border: 1px solid black;
    margin-bottom: 5px;
  }
</style>
