<template>
    <div class="n-products">
        <h1>{{ title }}</h1>
        <ul>
            <li
                v-for="item in items"
                :key="item.id"
            >
                <nuxt-link class="ds-nuxt-link_disable" :to="`/catalog/${item.id}`">
                    <div>
                        <div>
                            <img :src="item.thumbnail" alt="">
                        </div>
                        <b>Производитель:</b> {{ item.brand }}
                        <br>
                        <b>Модель:</b> {{ item.title }}
                        <br>
                        <b>Рейтинг:</b> {{ item.rating }}
                    </div>
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
       items: {},
       title: String
    },
}
</script>

<style lang="scss" scoped>
.n-products {
    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
    li {
        list-style-type: none;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0,0,0,.1);
        padding: 20px;
        &:hover {
            box-shadow: 0 2px 10px rgba(95, 190, 5, 0.925);
        }
        img {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 10px;
        }
    }
    h1 {
        width: 20%;
    }
}
</style>