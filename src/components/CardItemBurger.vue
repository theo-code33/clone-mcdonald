<script>
import ModalBurger from './ModalBurger.vue'
export default {
    name: 'CardItemBurger',
    data(){
        return {
            isOpen: false,
            numberOfItem: 1
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
        },
        sendValue(){
            this.$emit('numberOfItem', this.numberOfItem)
        },
        addItem(){
            this.numberOfItem = this.numberOfItem + 1
            this.sendValue()
        },
        removeItem(){
            if(this.numberOfItem > 0){
                this.numberOfItem = this.numberOfItem - 1
                this.sendValue()
            }
        },
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
    >
        <button @click="removeItem">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
            </svg>
        </button>
        <p>{{numberOfItem}}</p>
        <button @click="addItem">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
        </button>
    </ModalBurger>
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