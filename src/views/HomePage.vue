<script>
import CardItemBurger from '../components/CardItemBurger.vue'
import { mapState } from 'vuex'
export default {
  name: 'HomePage',
  data(){
    return{
      number: 1
    }
  },
  components: {
    CardItemBurger
  },
  computed: {
    ...mapState(['burger']),
  },
  
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