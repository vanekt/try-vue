<template>
  <div>
    <h2>Form inputs</h2>
    <hr>

    <input type="text" v-model.lazy="textInputValue" />
    <p>{{textInputValue}}</p>
    <hr>

    <textarea v-model="textareaValue" rows="5"></textarea>
    <div class="textarea-value">{{textareaValue}}</div>
    <hr>

    <label><input type="checkbox" value="fb" v-model="socialCheckbox"> Facebook</label>
    <label><input type="checkbox" value="vk" v-model="socialCheckbox"> Vkontakte</label>
    <label><input type="checkbox" value="instagram" v-model="socialCheckbox"> Instagram</label>
    <ul>
      <li v-for="item in socialCheckbox" :key="item">{{item}}</li>
    </ul>
    <hr>

    <label><input type="radio" value="fb" v-model="socialRadio"> Facebook</label>
    <label><input type="radio" value="vk" v-model="socialRadio"> Vkontakte</label>
    <label><input type="radio" value="instagram" v-model="socialRadio"> Instagram</label>
    <p>{{socialRadio}}</p>
    <hr>

    <select v-model="socialSelect.selected">
      <option v-for="item in socialSelect.items" :value="item.value">{{item.label}}</option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'Forms',
  data: () => ({
    textInputValue: '',
    textareaValue: '',
    socialCheckbox: ['fb'],
    socialRadio: 'vk',
    socialSelect: {
      selected: 'vk',
      items: [
        { label: 'Facebook', value: 'fb' },
        { label: 'Vkontakte', value: 'vk' },
        { label: 'Instagram', value: 'instagram' },
      ],
    },
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .textarea-value {
    white-space: pre;
  }
</style>
