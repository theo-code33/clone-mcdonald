<template>
    <div class="container-modal">
        <button @click="close">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </button>
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
    },
    methods: {
        close(){
            this.$emit('close')
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
    background-color: #FFF;
    border: 1px solid #dcdcdc;
    border-radius: 4px;

    button{
        background: none;
        border: none;
        position: relative;
        top: 10px;
        right: 260px;
        cursor: pointer;
    }
}
.detail-burger{
    margin-top: 50px;
    img{
        height: 135px;
    }
    &-price{
        font-size: 1.3em;
    }
}
</style>