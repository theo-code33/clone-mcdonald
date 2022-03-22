<script>
import CardItemBurger from '../components/CardItemBurger.vue'
import { mapState } from 'vuex'
export default {
  name: 'HomePage',
  components: {
    CardItemBurger
  },
  computed: {
    ...mapState(['burger']),
  },
  methods: {
    multipliePrice(numberOfItem){
        console.log(numberOfItem);
        console.log(this.burger.price);
        console.log(this.burger.price * numberOfItem);
    }
  }
  
}
</script>
<template>
  <div class="home">
    <h1>Clone App McDonald</h1>
    <div class="container-burger">
    <CardItemBurger
      v-for="item in burger"
      :name="item.name"
      :price="item.price + '0'"
      :img='item.img'
      :key="item.name"
      v-on:numberOfItem = 'multipliePrice'
    />
    </div>
  </div>
</template>

<style lang="scss">
  .container-burger{
    max-width: 900px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto;
  }
</style>