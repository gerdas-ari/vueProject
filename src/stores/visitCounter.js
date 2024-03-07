import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('visitCounter', () => {
  let initialData;

  if (localStorage.getItem("metricsData")) {
    initialData = JSON.parse(localStorage.getItem("metricsData"));
  } else {
    initialData = {
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
    }
  }
  console.log(initialData);
  const viewData = ref({initialData});

  

  function increaseComponentView(componentName) {

    // if (!localStorage.getItem("metricsData")) {
    //   viewData.value[componentName].count = 0;
    //   viewData.value[componentName].date = null;

      
    // }  
    
    viewData.value[componentName].count++;
    viewData.value[componentName].date = new Date();

    window.localStorage.setItem('metricsData', JSON.stringify(viewData));
  }

  return { viewData, increaseComponentView }
})
