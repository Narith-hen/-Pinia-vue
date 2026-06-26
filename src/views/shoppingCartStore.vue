<template>
  <nav class="nav-links">
    <router-link to="/ex1">Exercise 1</router-link>
    <router-link to="/ex2">Exercise 2</router-link>
    <router-link to="/ex3">Exercise 3</router-link>
    <router-link to="/ex4">Exercise 4</router-link>
    <router-link to="/ex5">Exercise 5</router-link>
  </nav>
  <!-- Exercise 4: Shopping Cart -->
  <div class="card">
    <h1 class="text">Exercise 4: Shopping Cart</h1>

    <div class="border">
      <p><strong>Shopping Cart</strong></p>
      <ul>
        <li v-for="item in shoppingCart.cartItem" :key="item.id" class="product-item">
          {{ item.name }}
          - ${{ item.price }} (x{{ item.quantity }})

          <button @click="shoppingCart.removeFromCart(item.id)" class="btn-destroy">Remove</button>
        </li>
      </ul>
      <div class="stats">
        <p>Total Items: {{ shoppingCart.totalItem }}</p>
        <p>Total Price: ${{ shoppingCart.totalPrice }}</p>
      </div>
    </div>

    <p><strong>Products list</strong></p>
    <ul>
      <li v-for="product in shoppingCart.products" :key="product.id" style="list-style: none;">
        {{ product.name }} - ${{ product.price }}
        <button @click="shoppingCart.addToCart(product)" class="btn-primary">Add to Cart</button>
      </li>
    </ul>
  </div>
  <div class="description">
    <h3>✅ Exercise 4: Shopping Cart</h3>
    <p><strong>State:</strong> products, cart</p>
    <p><strong>Actions:</strong> addToCart(), removeFromCart(), clearCart()</p>
    <p><strong>Getters:</strong> totalItems, totalPrice</p>
    <p><strong>Display:</strong> Product list, Shopping cart, Total items, Total price</p>
  </div>
</template>

<script setup>
import { useShoppingCartStore } from '@/stores/ShoppingCartStore'
const shoppingCart = useShoppingCartStore()
</script>

<style lang="scss" scoped></style>
