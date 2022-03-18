import { createStore } from 'vuex'

export default createStore({
  state: {
    burger: {
      bigMac: {
        name: 'Big Mac',
        price: 4.70,
        img: 'https://ws.mcdonalds.fr/media/ff/62/d1/ff62d1acc3e68417ad9dd72e57257217e3e93f5d?auto=webp&width=1280&disable=upscale'
      },
      280: {
        name: '280 Original',
        price: 6.10,
        img: 'https://ws.mcdonalds.fr/media/d1/b3/8a/d1b38a709cb9e6ba034e81c15466efc1a549f1e1?auto=webp&width=1280&disable=upscale'
      },
      bigTasty: {
        name: 'Big Tasty',
        price: 6.10,
        img: 'https://ws.mcdonalds.fr/media/ae/51/30/ae513004594cb56ee9ade2fdebc98794d3f24376?auto=webp&width=1280&disable=upscale'
      },
      tastyChicken: {
        name: 'Chicken Tasty',
        price: 6.10,
        img: 'https://ws.mcdonalds.fr/media/7d/04/74/7d0474a3a8f6d7b461a6436d088843c8dd8d63e3?auto=webp&width=1280&disable=upscale'
      },
      CBO: {
        name: 'CBO',
        price: 5.60,
        img: 'https://ws.mcdonalds.fr/media/e4/45/91/e44591585a3833eaaf986bae9de79e0785e0b2cf60f6bbd8277948271c7a3fa5?auto=webp&width=1280&disable=upscale'
      },
      doubleCheese: {
        name: 'Double Cheese',
        price: 3.70,
        img: 'https://ws.mcdonalds.fr/media/31/41/8c/31418c063646fed584db8fa7e4e1f6a1314f1702?auto=webp&width=1280&disable=upscale'
      },
      tripleCheese: {
        name: 'Triple Cheese',
        price: 5.10,
        img: 'https://ws.mcdonalds.fr/media/63/c2/c6/63c2c6b3ffb51b0e8c3a15e799623507bb5bff4f?auto=webp&width=1280&disable=upscale'
      },
      tripleCheeseBacon: {
        name: 'Triple Cheese Bacon',
        price: 5.40,
        img: 'https://ws.mcdonalds.fr/media/ca/4f/5e/ca4f5e126daa548ccfe11ad7259228c7e019864c?auto=webp&width=1280&disable=upscale'
      }
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
