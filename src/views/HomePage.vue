<template>
  <div class="home">
    <h1>Clone App McDonald</h1>
    <CardItemBurger
      :name="$store.state.burger.bigMac.name"
      :price='$store.state.burger.bigMac.price'
      :img='$store.state.burger.bigMac.img'
    />
  </div>
</template>

<script>
import CardItemBurger from '../components/CardItemBurger.vue'
export default {
  name: 'HomePage',
  components: {
    CardItemBurger
  },
  methods: {
  }
  
}
</script>
