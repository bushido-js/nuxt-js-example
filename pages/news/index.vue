<template>
  <div class="wrapper-container">
        <h1>Новости</h1>
        <div class="news-containers">
            <div>Новость 1</div>
            <div>Новость 2</div>
            <div>Новость 3</div>
            <div>Новость 4</div>
            <div>Новость 5</div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'sample',
}
</script>

<style lang="scss">
.news-containers {
    display: flex;
    flex-direction: column;
    gap: 20px;
    div {
        background: rgba(128, 128, 128, 0.548);
        width: 100%;
        height: 200px;
        border-radius: 10px;
        font-size: 50px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>