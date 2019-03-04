<template>
  <div>
    <input type="text" v-model="searchName" />
    <ul>
      <li v-for="(name, idx) in filteredNames" :key="idx">{{name}}</li>
    </ul>

    <global-component />

    <p
      v-colored:background.delay="'red'"
      v-colored:color="'green'"
      v-if="isRedTextVisible"
      v-bolder-font
    >Red text</p>
    <p>{{ 'some text' | uppercase }}</p>
    <button @click="isRedTextVisible = !isRedTextVisible">Toggle</button>

    <counter :value="counter"></counter>

    <car name="Vaz" :year="1995" :onChangeCounter="changeCounter"></car>
    <car name="Toyota" :year="2001" :onChangeCounter="changeCounter">
      <p slot="country">Japan</p>
    </car>

    <car
      v-for="(car, idx) in cars"
      :key="idx"
      :name="car.name"
      :year="car.year"
      :onChangeCounter="changeCounter"
    >
      <p slot="country" v-if="car.country">{{car.country}}</p>
    </car>
  </div>
</template>

<script>
import Car from '../components/Car';
import Counter from '../components/Counter';
import nameListMixin from '../mixins/nameList';

export default {
  mixins: [
    nameListMixin,
  ],
  name: 'Hello',
  components: {
    car: Car,
    counter: Counter,
  },
  data: () => ({
    counter: 0,
    isRedTextVisible: true,
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
  methods: {
    changeCounter() {
      this.counter = this.counter + 1;
    },
  },
  directives: {
    'bolder-font': {
      bind(el) {
        /* eslint-disable-next-line */
        el.style.fontWeight = 'bold';
      },
    },
  },
  filters: {
    uppercase: value => value.toUpperCase(),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
