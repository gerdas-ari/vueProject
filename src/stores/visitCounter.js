import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('visitCounter', () => {
  const viewData = ref({
    whiteBoxes: {
      count: 0,
      date: null
    },
    counter: {
      count: 0,
      date: null
    },
    slider: {
      count: 0,
      date: null
    },
  });

  

  function increaseComponentView(componentName) {
    viewData.value[componentName].count++;
    viewData.value[componentName].date = new Date();
  }

  return { viewData, increaseComponentView }
})
