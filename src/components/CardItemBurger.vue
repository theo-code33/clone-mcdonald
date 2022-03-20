<script>
import ModalBurger from './ModalBurger.vue'
export default {
    name: 'CardItemBurger',
    data(){
        return {
            isOpen: false,
        } 
    },
    components: {
        ModalBurger,
    },
    props:{
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
        closeModal(){
            this.isOpen = false
        }
    }
}
</script>

<template>
    <div class="card-burger" @click="isOpen = true">
        <div class="card-burger-left">
            <img :src="img" :alt="name">
        </div>
        <div class="card-burger-right">
            <h3>{{name}}</h3>
            <p>{{price}} €</p>
        </div>
    </div>
    <ModalBurger
    v-if="isOpen"
    @close="closeModal"
    :name="name"
    :price="price"
    :img="img"
    />
</template>

<style lang="scss">
    .card-burger{
        width: 250px;
        height: 136px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        margin: 20px;
        padding: 24px 16px;
        cursor: pointer;
        

        &-left{
            width: 64px;
            margin-right: 12px;

            img{
                width: 100%;
            }
        }
        &-right{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            text-transform: uppercase;

            h3{
                text-align: left;
                margin: 0;
            }
            p{
                margin: 10px 0 0 0;
            }

        }
    }
</style>