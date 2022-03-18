<template>
    <div class="card-burger">
        <div class="card-burger-left">
            <img :src="img" :alt="name">
        </div>
        <div class="card-burger-right">
            <h3>{{name}}</h3>
            <p>{{price}} €</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardItemBurger',
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
    }
}
</script>

<style lang="scss">
    .card-burger{
        width: 250px;
        height: 136px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
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
                margin: 0;
            }
            p{
                margin: 10px 0 0 0;
            }

        }
    }
</style>