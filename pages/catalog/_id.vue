<template>
    <div class="wrapper-container">
        <div class="product-page">
            <div class="product-page__image">
                <img :src="currentProduct.thumbnail" alt="">
            </div>
            <div class="product-page__description">
                <div><b>Производитель:</b> {{ currentProduct.brand }}</div>
                <div><b>Модель:</b> {{ currentProduct.title }}</div>
                <div><b>Рейтинг:</b> {{ currentProduct.rating }}</div>
                <div><b>Категория:</b> {{ currentProduct.category }}</div>
                <div><b>Описание:</b> {{ currentProduct.description }}</div>
            </div>
            <div class="product-page__images">
                <div v-for="image in currentProduct.images">
                    <img :src="image" alt="">
                </div>
            </div>
        </div>
        <h2>Дополнительное описание:</h2>
        <div class="lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, facilis dolorum! Nisi aspernatur odio expedita quibusdam quia obcaecati excepturi commodi, rem iure ex vel, alias error! Ea quibusdam consequatur assumenda.</div>
        <div class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea molestiae, possimus, repellendus placeat dolorem autem nam optio obcaecati consequuntur totam non fuga minima blanditiis laudantium, itaque facere facilis enim?</div>
        <div class="lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, facilis dolorum! Nisi aspernatur odio expedita quibusdam quia obcaecati excepturi commodi, rem iure ex vel, alias error! Ea quibusdam consequatur assumenda.</div>
        <div class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea molestiae, possimus, repellendus placeat dolorem autem nam optio obcaecati consequuntur totam non fuga minima blanditiis laudantium, itaque facere facilis enim?</div>
        <div class="lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, facilis dolorum! Nisi aspernatur odio expedita quibusdam quia obcaecati excepturi commodi, rem iure ex vel, alias error! Ea quibusdam consequatur assumenda.</div>
    </div>

</template>

<script>
export default {
    layout: 'sample',
    computed: {
        currentProduct() {
            console.log('this.$route.params.id', this.$route);
            return this.$store.state.products.products.filter((product) => product.id == this.$route.params.id)[0]
        }
    }
}
</script>

<style lang="scss">
.product-page {
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr 1fr;
    box-shadow: 0 2px 10px rgba(0,0,0,.1);
    border-radius: 20px;
    padding: 20px;
    margin: 40px auto;
}

.product-page__image {
    display: flex;
    justify-content: center;
    border-radius: 10px;
    img {
        border: 1px solid rgba(128, 128, 128, 0.438);
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
        height: 500px;
    }
}

.product-page__images {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    justify-content: center;
    img {
        border: 1px solid rgba(128, 128, 128, 0.438);
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 20px;
    }
}

.product-page__description {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 18px;
}
</style>