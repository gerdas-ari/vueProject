<script >
    import TabsDispatcher from '../components/TabsDispatcher.vue';
    import { useCounterStore } from '../stores/visitCounter.js';
    import { mapActions} from 'pinia';

    export default {
        components: { TabsDispatcher },
        mounted() {
            this.increaseComponentView('slider');
        },
        methods: {...mapActions(useCounterStore, ['increaseComponentView']) },
    }
</script>

<template>
  
  <div class="page d-flex flex-column align-items-center justify-content-center">
    <h1>Слайдер с табами</h1>

    <TabsDispatcher />

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
