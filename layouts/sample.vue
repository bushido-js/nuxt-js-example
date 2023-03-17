<template>
    <div>
        <ds-header  />
        <Nuxt />
        <ds-footer  />
    </div>
</template>

<script>
export default {
    async created() {
        const response = await fetch('https://dummyjson.com/products')
        const item = await response.json();
        this.addProducts(item.products)
    },

    methods: {
        addProducts (products) {
            if (!this.$store.state.products.products.length) {
                this.$store.commit('products/addProducts', products)
            }
            return
        },
    }
}
</script>

<style lang="scss">
</style>