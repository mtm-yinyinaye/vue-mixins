import Vue from 'vue'
import App from './App.vue'
import 'vue-select/dist/vue-select.css';
// import myMixin from './assets/js/myMixin'

Vue.config.productionTip = false

// Vue.mixin(myMixin); // vue global variable with spread file

// vue global variable 
Vue.mixin({
  data: function() {
    return {
      title: 'My title',
      lists: [
        {
          id: 1,
          title: 'title1',
          description: 'descriptiondescriptiondescription'
        },
        {
          id: 2,
          title: 'title2',
          description: 'descriptiondescriptiondescription'
        },
        {
          id: 3,
          title: 'title3',
          description: 'descriptiondescriptiondescription'
        }
      ]

    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
