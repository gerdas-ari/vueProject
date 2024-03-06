<script>

    import RectangleForm from '../components/RectangleForm.vue';
    import { useCounterStore } from '../stores/visitCounter.js';
    import { mapActions} from 'pinia';
    

    export default {
        components: { RectangleForm },

        mounted() {
            this.increaseComponentView('whiteBoxes');
        },
        methods: {...mapActions(useCounterStore, ['increaseComponentView']) },
    }

    

</script>

<template>
  
  <div class="page d-flex flex-column align-items-center justify-content-center">
    <h1>Игруха с квадратиками</h1>

    <RectangleForm />

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
