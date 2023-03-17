<template>
    <div class="container">
        <h1 v-if="error.statusCode === 404" style="color:red;">Страницы нет чувачок</h1>
        <h1 v-else>Вышло недоразуме́ние / ошибка </h1>
        <NuxtLink to="/"> Уйти домой </NuxtLink>
    </div>
</template>

<script>
export default {
    props: ['error']
}
</script>