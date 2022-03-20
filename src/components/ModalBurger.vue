<template>
    <div class="container-modal">
        <slot></slot>
        <div class="detail-burger">
            <img :src="img" :alt="name">
            <h1>{{name}}</h1>
            <p class="detail-burger-price">{{price}} €</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalBurger',
    props: {
        name: {
            type: String,
        },
        price: {
            type: Number,
        },
        img: {
            type: Object,
        }
    }
}
</script>

<style lang="scss">
.container-modal{
    width: 580px;
    height: 90vh;
    position: fixed;
    z-index: 100;
    top: 50px;
    margin: auto;
    background-color: red;
}
.detail-burger{
    img{
        height: 135px;
    }
    &-price{
        font-size: 1.3em;
    }
}
</style>