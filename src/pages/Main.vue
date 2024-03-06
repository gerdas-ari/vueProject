<script >
    import { RouterLink } from 'vue-router';
</script>

<template>
  
    <div class="page d-flex flex-column align-items-center justify-content-center">
        <h1>Мои тестовые приколюхи на Vue 3</h1>

        <nav class="nav d-flex align-items-center mt15">
            <RouterLink class="nav__link" to="/counter">Счётчик</RouterLink>
            <RouterLink class="nav__link" to="/slider">Слайдер</RouterLink>
            <RouterLink class="nav__link" to="/whiteboxes">Квадратики</RouterLink>
            <RouterLink class="nav__link" to="/metrics">Метрика</RouterLink>
        </nav>
    </div>
</template>

<style lang="scss" scoped>

    .nav {

        &__link {

            & + & {
                margin-left: 10px;
            }
        }
    }
</style>
