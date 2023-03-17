<template>
    <div class="wrapper-container ">
        <products-list 
            :items="items"
            title="Каталог"
        />
    </div>
</template>

<script>
import productsList from '../../components/products-list.vue'
export default {
    components: { productsList },
    layout: 'sample',

    // data() {
    //     return {
    //         items: [],
    //     }
    // },
    computed: {
        items() {
            return this.$store.state.products.products.filter(product => product).reverse()
        }
    }

    // async created() {
    //     const response = await fetch('https://dummyjson.com/products')
    //     const item = await response.json();
    //     this.items = item.products.reverse();
    // },
}
</script>

<style lang="scss">

</style>