<script setup>

    import { useCounterStore } from '../stores/visitCounter.js';
    const counterStore = useCounterStore();
    
</script>

<template>
  
  <div class="page d-flex flex-column align-items-center justify-content-center">
    <h1>Метрика по компонентам</h1>

    <div>Квадратики: {{ counterStore.viewData.whiteBoxes }}</div>
    <div>Счётчик: {{ counterStore.viewData.counter }}</div>
    <div>Слайдер: {{ counterStore.viewData.slider }}</div>

    <button
        @click="$router.push('/')"
        class="home_btn mt40"
    >
    Домой
    </button>

    </div>
</template>

<style scoped>

</style>
