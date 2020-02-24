import Vue from 'vue'

import Example from './components/example.vue'

Vue.component('example-component', Example)

new Vue({
  el: '#app'
})