<template>
    <div class="card-item-burger">
        <div class="left-part-card-burger">
            <img :src="img" :alt="name">
        </div>
        <div class="right-part-card-burger">
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