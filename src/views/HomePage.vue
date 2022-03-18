<template>
  <div class="home">
    <h1>Clone App McDonald</h1>
    <CardItemBurger
      v-for="item in burger"
      :name="item.name"
      :price='item.price'
      :img='item.img'
      :key="item.name"
    />
  </div>
</template>

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
