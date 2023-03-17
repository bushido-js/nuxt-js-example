export const state = () => ({
    products: []
})

export const mutations = {
    addProducts(state, products) {
        state.products.push(...products)
    }
}

export const getters = {
    getCurrentProduct: (state, id) => {
        return state.products.filter((product) => product.id == id)
    },
    getListProducts: (state) => {
        return state.products
    },
}