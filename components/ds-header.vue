<template>
    <header class="header">
        <div class="header__title">
            <nuxt-link to="/">
                <img src="~logo/semyanich.svg" alt="">
            </nuxt-link>
            <div class="header__title-description">
                IT_WORKSHOPS
            </div>
        </div>
        <div class="header__menu">
            <nuxt-link class="header__link ds-text-1 " to="/catalog">Каталог</nuxt-link>
            <nuxt-link class="header__link ds-text-1 " to="/delivery">Доставка</nuxt-link>
            <nuxt-link class="header__link ds-text-1 " to="/news">Новости</nuxt-link>
        </div>
    </header>
</template>

<style lang="scss">

.header__title {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #1818181f;
    img {
        height: 70px;
    }
}

.header__title-description {
    color: rgb(37, 37, 37);
    font-size: 20px;
}

.header__menu {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background: rgb(37, 37, 37);
}

.header__link {   
    font-size: 19px; 
    display: flex;
    justify-content: center;
    height: 100%;
    text-decoration: none;
    align-items: center;
    color: white;
    padding: 0 10px;

    width: 100%;
    border-right: 1px solid rgb(85, 85, 85);
    &:last-child {
        border: none; 
    }
    &:hover {
        background: #74b908;
    }
}
</style>