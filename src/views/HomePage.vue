<script>
import CardItemBurger from '../components/CardItemBurger.vue'
import { mapState } from 'vuex'
export default {
  name: 'HomePage',
  components: {
    CardItemBurger
  },
  computed: {
    ...mapState(['burger'])
  },
  methods: {
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
      :price='item.price'
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