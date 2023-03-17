<template>
    <div class="wrapper-container">
        <div class="main-page">
            <products-list 
                :items="items"
                title="Новинки"
            />
            <div class="lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, facilis dolorum! Nisi aspernatur odio expedita quibusdam quia obcaecati excepturi commodi, rem iure ex vel, alias error! Ea quibusdam consequatur assumenda.</div>
            <div class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea molestiae, possimus, repellendus placeat dolorem autem nam optio obcaecati consequuntur totam non fuga minima blanditiis laudantium, itaque facere facilis enim?</div>
            <div class="lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, facilis dolorum! Nisi aspernatur odio expedita quibusdam quia obcaecati excepturi commodi, rem iure ex vel, alias error! Ea quibusdam consequatur assumenda.</div>
            <div class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea molestiae, possimus, repellendus placeat dolorem autem nam optio obcaecati consequuntur totam non fuga minima blanditiis laudantium, itaque facere facilis enim?</div>
            <div class="lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, facilis dolorum! Nisi aspernatur odio expedita quibusdam quia obcaecati excepturi commodi, rem iure ex vel, alias error! Ea quibusdam consequatur assumenda.</div>
        </div>
    </div>
</template>

<script>
import productsList from '../components/products-list.vue';

export default {
    // async asyncData() {
    //     const response = await fetch('https://dummyjson.com/products')
    //     const item = await response.json();
    //     const items = item.products.filter(product => product).splice(0, 6);
    //     return {
    //         items
    //     }
    // },
    components: { productsList },
    layout: 'sample',
    
    computed: {
        items() {
            return this.$store.state.products.products.filter((product, index) => {
                if (index < 6) {
                    return product
                }
            })
        }
    },
}
</script>

<style lang="scss">

.main-page {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.lorem {
    color: gray;
}

</style>