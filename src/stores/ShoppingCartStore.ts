import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useShoppingCartStore = defineStore('products', () => {
  const cartItem = ref<any>([])
  const products = ref([
    {
      id: 1,
      name: 'Laptop',
      price: 999.0,
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 399.99,
    },
  ])

  //Add to cart
  function addToCart(product: any) {
    const item = cartItem.value.find((item: any) => item.id === product.id)

    if (item) {
      item.quantity++
    } else {
      cartItem.value.push({
        ...product,
        quantity: 1,
      })
    }
  }

  function removeFromCart(id: number) {
    const item = cartItem.value.find((item: any) => item.id === id)

    if (!item) return

    if (item.quantity > 1) {
      item.quantity--
    } else {
      cartItem.value = cartItem.value.filter((item: any) => item.id !== id)
    }
  }

  function clearCart() {
    cartItem.value = []
  }

  //Getters
  const totalItem = computed(() =>
    cartItem.value.reduce((sum: number, item: any) => sum + item.quantity, 0),
  )
  const totalPrice = computed(() =>
    cartItem.value.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0),
  )

  return {
    cartItem,
    products,
    totalItem,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart,
  }
})
