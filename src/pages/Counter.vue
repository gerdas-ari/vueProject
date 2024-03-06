<script >
    import Counter from '../components/Counter.vue';
    import { useCounterStore } from '../stores/visitCounter.js';
    import { mapActions} from 'pinia';

    export default {
        components: { Counter },
        mounted() {
            this.increaseComponentView('counter');
        },
        methods: {...mapActions(useCounterStore, ['increaseComponentView']) },
    }
</script>

<template>
  
  <div class="page d-flex flex-column align-items-center justify-content-center">
        
    <h1>Счётчик</h1>

    <Counter />

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
