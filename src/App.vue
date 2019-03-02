<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <global-component />

    <p v-color-red>Red text</p>

    <counter :value="counter"></counter>

    <car name="Vaz" :year="1995" :changeCounter="changeCounter"></car>
    <car name="Toyota" :year="2001" :changeCounter="changeCounter">
      <p slot="country">Japan</p>
    </car>

    <car
      v-for="(car, idx) in cars"
      :key="idx"
      :name="car.name"
      :year="car.year"
      :changeCounter="changeCounter"
    >
      <p slot="country" v-if="car.country">{{car.country}}</p>
    </car>
  </div>
</template>

<script>
import Car from './components/Car';
import Counter from './components/Counter';

export default {
  name: 'App',
  data: () => ({
    counter: 0,
    cars: [
      {
        name: 'Ford',
        year: 2019,
      },
      {
        name: 'Mazda',
        year: 2000,
        country: 'Japan',
      },
    ],
  }),
  components: {
    car: Car,
    counter: Counter,
  },
  methods: {
    changeCounter() {
      this.counter = this.counter + 1;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
